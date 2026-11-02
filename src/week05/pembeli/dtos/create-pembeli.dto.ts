import { IsString, IsEmail, IsNotEmpty, MinLength, IsNumber } from 'class-validator';

export class CreatePembeliDto {
  @IsString()
  @IsNotEmpty()
  nomorInduk: string;

  @IsString()
  @IsNotEmpty()
  namaLengkap: string;

  @IsString()
  alamat: string;

  @IsString()
  @IsNotEmpty()
  nomorHp: string;

  @IsNumber()
  saldo: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
