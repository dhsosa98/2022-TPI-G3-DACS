import { Controller, Get } from '@nestjs/common';
import { Role } from 'src/auth/enums/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { MarketingService } from '../services/MarketingService.service';

@Controller('marketing')
export class MarketingController {
  constructor(private readonly marketingService: MarketingService) {}
  @Get('/')
  @Roles(Role.Admin)
  getSalesByUser() {
    return this.marketingService.handleNotifications();
  }
}
