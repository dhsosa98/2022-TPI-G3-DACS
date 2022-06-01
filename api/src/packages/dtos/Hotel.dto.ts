import { IsNumber, IsOptional, IsString } from 'class-validator';

export class HotelDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsNumber()
  phone: number;
}

export class HotelOnUpdateDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsNumber()
  phone: number;
}
