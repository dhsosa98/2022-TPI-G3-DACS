import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class TicketDto {
  @IsNumber()
  seat: number;

  @IsDate()
  @Type(() => Date)
  departureDate: Date;

  @IsDate()
  @Type(() => Date)
  returnDate: Date;

  @IsNumber()
  travelWayId: number;

  @IsNumber()
  amount: number;
}

export class TicketOnUpdateDto {
  @IsOptional()
  @IsNumber()
  seat: number;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  departureDate: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  returnDate: Date;

  @IsOptional()
  @IsNumber()
  travelWayId: number;

  @IsOptional()
  @IsNumber()
  amount: number;
}