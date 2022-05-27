import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { CardPaymentDto } from 'src/sales/dtos/cardPayment.dto';
import { PaymentDto } from 'src/sales/dtos/payment.dto';

export class CreateSaleDto {
  @IsNumber()
  packageId: number;

  @ValidateNested()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @Type(() => CardPaymentDto)
  payment!: CardPaymentDto;
}
