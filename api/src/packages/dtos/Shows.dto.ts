import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString, IsOptional } from 'class-validator';

export class ShowDto {
  @IsString()
  name: string;

  @IsNumber()
  seat: number;

  @IsNumber()
  amount: number;

  @IsDate()
  @Type(() => Date)
  dateShow: Date;
}

export class ShowOnUpdateDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  seat: number;

  @IsOptional()
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dateShow: Date;
}
