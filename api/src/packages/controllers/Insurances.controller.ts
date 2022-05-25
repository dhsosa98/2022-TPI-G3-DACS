import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { GetPagination } from 'src/decorators/pagination.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { InsuranceOnUpdateDto } from '../dtos/InsuranceOnUpdate.dto';
import { InsuranceDto } from '../dtos/Insurances.dto';
import { InsuranceService } from '../services/Insurance.service';

@Controller('insurances')
export class InsurancesController {
  constructor(private insuranceService: InsuranceService) {}

  @Delete('/:insuranceId')
  @Roles(Role.Admin)
  deleteInsuranceById(@Param('insuranceId') insuranceId: number) {
    return this.insuranceService.delete(insuranceId);
  }

  @Post('/')
  @Roles(Role.Admin)
  createInsurance(@Body() insurance: InsuranceDto) {
    return this.insuranceService.create(insurance);
  }

  @Get('/')
  @Public()
  findAllInsurances(@GetPagination() options: any) {
    return this.insuranceService.findAll(options);
  }

  @Get('/:insuranceId')
  @Public()
  findInsuranceById(@Param('insuranceId') insuranceId: number) {
    return this.insuranceService.findOne(insuranceId);
  }

  @Patch('/:id')
  @Roles(Role.Admin)
  updateInsurance(
    @Body() insurance: InsuranceOnUpdateDto,
    @Param('id') id: number,
  ) {
    return this.insuranceService.update(id, insurance);
  }
}
