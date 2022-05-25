import {
  Injectable,
  Inject,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { Hotel } from '../entitities/hotel.entity';
import { Insurance } from '../entitities/insurances.entity';
import { Package } from '../entitities/packages.entity';
import { Show } from '../entitities/shows.entity';
import { Ticket } from '../entitities/tickets.entity';
import { TravelWay } from '../entitities/travelWays.entity';
import { HotelService } from './Hotel.service';
import { InsuranceService } from './Insurance.service';
import { ShowsService } from './Shows.service';
import { TicketService } from './Ticket.service';

@Injectable()
export class PackagesService {
  constructor(
    @Inject('PACKAGE_REPOSITORY') private packagesRepository: typeof Package,
  ) {}

  async findAll(): Promise<Package[]> {
    return await this.packagesRepository.findAll({
      include: [
        Insurance,
        { model: Ticket, include: [TravelWay] },
        Hotel,
        Show,
      ],
    });
  }

  async create(pack: any): Promise<Package> {
    const newPack = await this.packagesRepository.create({ ...pack });
    await newPack.save();
    return newPack;
  }

  async delete(id: number): Promise<Package> {
    const pack = await this.packagesRepository.findOne({ where: { id } });
    if (!pack) {
      throw new NotFoundException('Package does not exist');
    }
    await pack.destroy();
    return pack;
  }

  async findOne(id: number): Promise<Package> {
    const pack = await this.packagesRepository.findOne({
      where: { id },
      include: [
        Insurance,
        { model: Ticket, include: [TravelWay] },
        Hotel,
        Show,
      ],
    });
    if (!pack) {
      throw new NotFoundException('Package does not exist');
    }
    return pack;
  }

  async update(id: number, pack: any): Promise<Package> {
    let { total } = pack;

    const packToUpdate = await this.findOne(id);
    total += packToUpdate.insurance ? packToUpdate.insurance.amount : 0;
    total += packToUpdate.ticket ? packToUpdate.ticket.amount : 0;
    total += packToUpdate.show ? packToUpdate.show.amount : 0;
    const quant = pack.quantPeople || 1;
    total = total * quant;

    packToUpdate.name = pack.name;
    packToUpdate.quantPeople = pack.quantPeople;
    packToUpdate.insuranceId = pack.insuranceId;
    packToUpdate.ticketId = pack.ticketId;
    packToUpdate.hotelId = pack.hotelId;
    packToUpdate.showId = pack.showId;
    packToUpdate.total = total;
    await packToUpdate.save();
    return packToUpdate;
  }

  // deletePackageById(packageId: number): string {
  //   return this.packagesRepository.delete({ where: { packageId } });
  // }
  // createPackage(tourismPackage: any): string {
  //   return this.packagesRepository.create(tourismPackage);
  // }

  // createInsurance(insurance: any): Promise<Insurance> {
  //   return this.insuranceService.create(insurance);
  // }
}
