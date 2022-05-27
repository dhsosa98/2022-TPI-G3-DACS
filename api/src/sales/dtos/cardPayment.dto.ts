import {
  IsCreditCard,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CardPaymentDto {
  @IsCreditCard()
  @IsNotEmpty()
  cardNumber: string;

  @IsNumber()
  @Min(100)
  @Max(9999)
  @IsNotEmpty()
  cvv: number;

  @IsString()
  @IsNotEmpty()
  ownerName: string;

  @IsString()
  @IsNotEmpty()
  expirationDate: string;

  @IsString()
  @IsNotEmpty()
  paymentMethod: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
