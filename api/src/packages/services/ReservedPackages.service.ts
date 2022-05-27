import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/users/services/users.service';
import { Package } from '../entitities/packages.entity';
import { ReservedPackages as ReservedPackages } from '../entitities/reservedPackages.entity';
import { PackagesService } from './Packages.service';

@Injectable()
export class ReservedPackagesService {
  constructor(
    @Inject('RESERVED_PACKAGES_REPOSITORY')
    private reservedPackagesRepository: typeof ReservedPackages,
    private packagesService: PackagesService,
    private userService: UserService,
  ) {}

  async findAllReserves(userId: number, options?: any): Promise<any> {
    return await this.reservedPackagesRepository.findAll({
      where: { userId },
      include: [{ model: Package, as: 'pack' }],
    });
  }

  async deleteReserve(userId: number, packageId: number) {
    const reserve = await this.reservedPackagesRepository.findOne({
      where: { userId, packId: packageId },
    });
    if (!reserve) {
      throw new UnauthorizedException('Reserve not found');
    }
    return await reserve.destroy();
  }

  async create(reserve: any): Promise<ReservedPackages> {
    return await this.reservedPackagesRepository.create(reserve);
  }

  async delete(reserve: any) {
    return await this.reservedPackagesRepository.destroy(reserve);
  }

  async createReserve(userId: number, reserve: any) {
    const { packageId } = reserve;
    const user = await this.userService.findOne(userId);
    const packageToBuy = await this.packagesService.findOne(packageId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    if (!packageToBuy) {
      throw new UnauthorizedException('The package doesnt exist');
    }
    const exist = await this.reservedPackagesRepository.findOne({
      where: { userId, packId: packageId },
    });
    if (exist) {
      throw new UnauthorizedException('The package is already reserved');
    }
    return this.create({
      packId: packageId,
      userId,
      subTotal: packageToBuy.total,
      pending: true,
    });
  }
}
