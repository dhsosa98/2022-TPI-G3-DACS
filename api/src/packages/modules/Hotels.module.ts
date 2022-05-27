import { Module } from '@nestjs/common';
import { HotelController } from '../controllers/Hotel.controller';
import { HotelProvider } from '../providers/hotel.provider';
import { HotelService } from '../services/Hotel.service';

@Module({
  imports: [],
  controllers: [HotelController],
  providers: [...HotelProvider, HotelService],
  exports: [HotelService],
})
export class HotelsModule {}
