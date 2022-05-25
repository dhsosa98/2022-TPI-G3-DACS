import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { GetPagination } from 'src/decorators/pagination.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { Pagination } from 'src/shared/interfaces/pagination';
import { HotelDto, HotelOnUpdateDto } from '../dtos/Hotel.dto';
import { HotelService } from '../services/Hotel.service';
@Controller('hotels')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Get('/')
  @Public()
  async findAllHotels(@GetPagination() options: Pagination) {
    return await this.hotelService.findAll(options);
  }

  @Get('/:idHotel')
  @Public()
  async findHotelById(@Param('idHotel') id: number) {
    return await this.hotelService.findOne(id);
  }

  @Delete('/:idHotel')
  @Roles(Role.Admin)
  async deleteHotel(@Param('idHotel') id: number) {
    return await this.hotelService.delete(id);
  }

  @Post('/')
  @Roles(Role.Admin)
  async createHotel(@Body() hotel: HotelDto) {
    return await this.hotelService.create(hotel);
  }

  @Patch('/:id')
  @Roles(Role.Admin)
  updateHotel(@Body() hotel: HotelOnUpdateDto, @Param('id') id: number) {
    return this.hotelService.update(id, hotel);
  }
}
