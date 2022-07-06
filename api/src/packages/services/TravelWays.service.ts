import { Inject, Injectable } from '@nestjs/common';
import { TravelWay } from '../entitities/travelWays.entity';
import {NotFoundException} from '@nestjs/common';

@Injectable()
export class TravelWaysService {
  constructor(
    @Inject('TRAVEL_WAYS_REPOSITORY')
    private travelWaysRepository: typeof TravelWay,
  ) {}

  async findOne(id: number): Promise<TravelWay> {
    const travelWay = await this.travelWaysRepository.findOne({ where: { id } });
    if (!TravelWay) {
      throw new NotFoundException('No existe este transporte');
    }
    return travelWay;
  }


  async findAll(): Promise<TravelWay[]> {
    const travelWays = await this.travelWaysRepository.findAll();
    if (!travelWays.length) {
      await this.create({ name: 'bus' });
      await this.create({ name: 'plane' });
    }
    return await this.travelWaysRepository.findAll();
  }

  async create(travelWay: any): Promise<TravelWay> {
    const newTravelWay = await this.travelWaysRepository.create({
      ...travelWay,
    });
    await newTravelWay.save();
    return newTravelWay;
  }
}
