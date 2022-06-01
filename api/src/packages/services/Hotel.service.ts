import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { HotelDto, HotelOnUpdateDto } from '../dtos/Hotel.dto';
import { Hotel } from '../entitities/hotel.entity';

@Injectable()
export class HotelService {
  constructor(
    @Inject('HOTEL_REPOSITORY')
    private hotelRepository: typeof Hotel,
  ) {}

  async findAll(options?: any): Promise<Hotel[]> {
    return this.hotelRepository.findAll(options);
  }

  async findOne(id: number): Promise<Hotel> {
    const hotel = await this.hotelRepository.findOne({
      where: { id },
    });
    if (!hotel) {
      throw new NotFoundException('Hotel not found');
    }
    return hotel;
  }

  async create(hotel: HotelDto): Promise<Hotel> {
    const newHotel = await this.hotelRepository.create({ ...hotel });
    await newHotel.save();
    return newHotel;
  }

  async delete(id: number): Promise<Hotel> {
    const hotel = await this.findOne(id);
    await hotel.destroy();
    return hotel;
  }
  async update(id: number, hotel: any): Promise<Hotel> {
    const HotelOnUpdate = await this.findOne(id);
    HotelOnUpdate.name = hotel.name;
    HotelOnUpdate.address = hotel.address;
    HotelOnUpdate.phone = hotel.phone;
    await HotelOnUpdate.save();
    return HotelOnUpdate;
  }
}
