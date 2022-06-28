import {
  IsString,
  IsEmail,
  MinLength,
} from 'class-validator';

export class RegisterUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  cuit: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
