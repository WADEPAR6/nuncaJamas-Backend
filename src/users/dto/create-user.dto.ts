/* eslint-disable prettier/prettier */
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsEnum,
  MinLength,
  Matches,
  IsPhoneNumber,
  Length
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Campo username obligatorio' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo password obligatorio' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @Matches(/(?=.*[!@#$%^&*])/, { message: 'La contraseña debe contener al menos un carácter especial' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo role obligatorio' })
  @IsEnum(['admin', 'customer'], { message: 'El rol debe ser "admin" o "customer"' })
  role: string;

  @IsEmail({}, { message: 'Campo email obligatorio y debe ser un correo válido' })
  @IsNotEmpty({ message: 'Campo email obligatorio' })
  email: string;

  @IsOptional()
  @IsPhoneNumber(null, { message: 'El número de teléfono debe ser un número válido de 10 dígitos' })
  @Length(10, 10, { message: 'El número de teléfono debe tener exactamente 10 dígitos' })
  phone: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo address obligatorio' })
  address: string;
}