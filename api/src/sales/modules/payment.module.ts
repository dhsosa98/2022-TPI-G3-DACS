import { Module } from '@nestjs/common';
import { PaymentService } from '../services/payment.service';
import { SalesService } from '../services/sales.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
