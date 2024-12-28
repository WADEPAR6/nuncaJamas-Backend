/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsOptional()
    discount?: number;

    @IsNumber()
    @IsNotEmpty()
    wholesalePrice: number;

    @IsString()
    @IsOptional()
    image: string; // Aquí puedes almacenar la imagen en formato Base64

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    supplier?: string;

    @IsString()
    @IsOptional()
    brand?: string;

    @IsString()
    @IsOptional()
    barcode?: string;

    @IsString()
    @IsOptional()
    category?: string;
}