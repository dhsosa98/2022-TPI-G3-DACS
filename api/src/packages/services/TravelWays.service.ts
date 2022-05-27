import { Inject, Injectable } from '@nestjs/common';
import { TravelWay } from '../entitities/travelWays.entity';

@Injectable()
export class TravelWaysService {
  constructor(
    @Inject('TRAVEL_WAYS_REPOSITORY')
    private travelWaysRepository: typeof TravelWay,
  ) {}
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
