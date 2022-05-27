import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { CardPaymentDto } from './cardPayment.dto';

export class PaymentDto {
  @ValidateNested()
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @Type(() => CardPaymentDto)
  payment!: CardPaymentDto;
}
