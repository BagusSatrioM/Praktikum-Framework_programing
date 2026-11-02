import { IsString, IsEmail, IsOptional, MinLength, IsNumber } from 'class-validator';

export class UpdatePetaniDto {
  @IsString()
  @IsOptional()
  nomorInduk?: string;

  @IsString()
  @IsOptional()
  namaLengkap?: string;

  @IsString()
  @IsOptional()
  alamat?: string;

  @IsString()
  @IsOptional()
  nomorHp?: string;

  @IsNumber()
  @IsOptional()
  saldo?: number;

  @IsString()
  @IsOptional()
  tanggalLahir?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;
}
