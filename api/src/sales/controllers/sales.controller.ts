import { Body, Controller, Post, Request } from '@nestjs/common';
import { CreateSaleDto } from '../dtos/CreateSale.dto';
import { SalesService } from '../services/sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly saleService: SalesService) {}

  @Post('/')
  createSales(@Request() req: any, @Body() packagesByClient: CreateSaleDto) {
    return this.saleService.createSales(req.user.uid, packagesByClient);
  }
}
