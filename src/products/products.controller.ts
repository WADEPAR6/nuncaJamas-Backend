/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { Express } from 'express';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async create(@UploadedFile() file: Express.Multer.File, @Body() createProductDto: CreateProductDto): Promise<Product> {
        if (file) {
            createProductDto.image = file.buffer.toString('base64');
        }
        return this.productsService.create(createProductDto);
    }
    
    @Get()
    async findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Product> {
        return this.productsService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateProductDto: Partial<CreateProductDto>): Promise<Product> {
        return this.productsService.update(id, updateProductDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Product> {
        return this.productsService.remove(id);
    }
}