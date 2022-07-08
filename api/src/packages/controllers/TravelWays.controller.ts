import { Controller, Get, Param } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { TravelWaysService } from '../services/TravelWays.service';

@Controller('travelways')
export class TravelWaysController {
  constructor(private travelWaysService: TravelWaysService) {}

  @Get('/:travelWayId')
  @Public()
  getTravelWayById(@Param('travelWayId') travelWayId: number) {
    return this.travelWaysService.findOne(travelWayId);
  }

  @Get('/')
  @Public()
  getAllTravelWays() {
    return this.travelWaysService.findAll();
  }
}
