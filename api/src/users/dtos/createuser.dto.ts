import { IsNumber, IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  cuit: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  @IsOptional()
  roleId: number;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsOptional()
  cuit: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsNumber()
  @IsOptional()
  roleId: number;
}
