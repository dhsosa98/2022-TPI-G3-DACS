import { IsNumber, IsOptional, IsString } from 'class-validator';

export class InsuranceOnUpdateDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  amount: number;
}
