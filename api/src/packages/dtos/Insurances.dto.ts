import { IsNumber, IsString } from 'class-validator';

export class InsuranceDto {
  @IsString()
  name: string;

  @IsNumber()
  amount: number;
}
