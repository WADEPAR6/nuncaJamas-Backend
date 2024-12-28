/* eslint-disable prettier/prettier */
import { IsString, IsOptional, IsEnum } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  @IsEnum(['admin', 'customer'])
  role?: string;

}