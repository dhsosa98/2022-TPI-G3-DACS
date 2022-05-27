import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InsuranceDto } from '../dtos/Insurances.dto';
import { Insurance } from '../entitities/insurances.entity';

@Injectable()
export class InsuranceService {
  constructor(
    @Inject('INSURANCE_REPOSITORY')
    private insuranceRepository: typeof Insurance,
  ) {}

  async findAll(options?: any): Promise<Insurance[]> {
    return await this.insuranceRepository.findAll(options);
  }

  async create(insurance: InsuranceDto): Promise<Insurance> {
    const newInsurance = await this.insuranceRepository.create({
      ...insurance,
    });
    await newInsurance.save();
    return newInsurance;
  }

  async findOne(id: number): Promise<Insurance> {
    const insurance = await this.insuranceRepository.findOne({
      where: { id },
    });
    if (!insurance) {
      throw new NotFoundException('Insurance not found');
    }
    return insurance;
  }

  async delete(id: number): Promise<Insurance> {
    const insurance = await this.findOne(id);
    await insurance.destroy();
    return insurance;
  }
  async update(id: number, insurance: any): Promise<Insurance> {
    const insuranceToUpdate = await this.findOne(id);
    insuranceToUpdate.name = insurance.name;
    insuranceToUpdate.amount = insurance.amount;
    await insuranceToUpdate.save();
    return insuranceToUpdate;
  }
}
