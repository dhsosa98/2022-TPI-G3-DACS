import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
} from '@nestjs/common';
import { PaymentDto } from 'src/sales/dtos/payment.dto';
import { CreateSaleDto } from '../../sales/dtos/CreateSale.dto';
import { ReservedPackagesService } from '../services/ReservedPackages.service';

@Controller('/reserves')
export class ReservedPackagesController {
  constructor(private readonly packageService: ReservedPackagesService) {}

  @Post('/')
  createReserve(@Request() req: any, @Body() packagesByClient: any) {
    return this.packageService.createReserve(req.user.uid, packagesByClient);
  }

  @Delete('/:packageId')
  deleteReserve(@Request() req: any, @Param('packageId') packageId: number) {
    return this.packageService.deleteReserve(req.user.uid, packageId);
  }

  @Get('/')
  getReserves(@Request() req: any) {
    return this.packageService.findAllReserves(req.user.uid);
  }
}
