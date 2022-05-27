import { Module } from '@nestjs/common';
import { InsurancesController } from '../controllers/Insurances.controller';
import { InsuranceProvider } from '../providers/insurance.provider';
import { InsuranceService } from '../services/Insurance.service';

@Module({
  imports: [],
  controllers: [InsurancesController],
  providers: [...InsuranceProvider, InsuranceService],
  exports: [InsuranceService],
})
export class InsurancesModule {}
