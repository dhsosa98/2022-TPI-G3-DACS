import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { TravelWaysService } from '../services/TravelWays.service';

@Controller('travelWays')
export class TravelWaysController {
  constructor(private travelWaysService: TravelWaysService) {}

  @Get('')
  @Public()
  getAllTravelWays() {
    return this.travelWaysService.findAll();
  }
}
