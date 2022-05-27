import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Package } from 'src/packages/entitities/packages.entity';
import { PackagesService } from 'src/packages/services/Packages.service';
import { ControlTourismService } from 'src/tourismControl/services/controlTourism.service';
import { UserService } from 'src/users/services/users.service';
import { Sale } from '../entitities/sale.entity';
import { PaymentService } from './payment.service';
import { ReservedPackagesService } from 'src/packages/services/ReservedPackages.service';
import { CreateSaleDto } from '../dtos/CreateSale.dto';

@Injectable()
export class SalesService {
  constructor(
    private paymentService: PaymentService,
    @Inject('SALE_REPOSITORY') private saleRepository: typeof Sale,
    private tourismControlService: ControlTourismService,
    private packagesService: PackagesService,
    private userService: UserService,
    private reservedPackagesService: ReservedPackagesService,
  ) {}

  async findAll(options: any): Promise<Sale[]> {
    return this.saleRepository.findAll({ ...options });
  }

  async findAllBoughts(userId: number, options?: any): Promise<Sale[]> {
    return await this.saleRepository.findAll({
      where: { userId },
      include: [{ model: Package, as: 'sales' }],
    });
  }

  async findAllByUserId(userId: number) {
    return this.saleRepository.findAll({
      where: { userId },
    });
  }

  handlePayment(payment: any, amount: number) {
    const isValid = this.paymentService.processPayment(payment, amount);
    if (isValid) return true;
    return false;
  }

  async create(sale: any, userId: number, amount: number) {
    const { packageId, payment } = sale;
    const { paymentMethod } = payment;
    const newSale = await this.saleRepository.create({
      paymentAmount: amount,
      saleDate: new Date(),
      userId,
      packId: packageId,
      paymentMethod,
    });
    return await newSale.save();
  }

  async createSales(userId: number, packagesByClient: CreateSaleDto) {
    const { packageId, payment } = packagesByClient;
    const user = await this.userService.findOne(userId);
    const packageToBuy = await this.packagesService.findOne(packageId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    if (!packageToBuy) {
      throw new UnauthorizedException('The package doesnt exist');
    }
    const isValid = await this.tourismControlService.validate({
      cuit: user.cuit,
      fecha_incio: new Date().toISOString(),
      fecha_fin: new Date().toISOString(),
      precio: packageToBuy.total,
    });
    if (!isValid) {
      throw new UnauthorizedException(
        'The user has not authorized to buy this package',
      );
    }
    const successPayment = this.handlePayment(payment, packageToBuy.total);
    if (!successPayment) {
      throw new UnauthorizedException('Payment not valid');
    }
    await this.reservedPackagesService.delete({
      where: { userId, packId: packageId },
    });
    return await this.create(packagesByClient, userId, packageToBuy.total);
  }
}
