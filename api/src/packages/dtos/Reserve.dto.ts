import { IsNumber } from 'class-validator';

export class ReserveDto {
  @IsNumber()
  packageId: number;
}
