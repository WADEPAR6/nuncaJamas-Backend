/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateProductDto): Promise<Product> {
        return this.prisma.product.create({
            data,
        });
    }

    async findAll(): Promise<Product[]> {
        return this.prisma.product.findMany();
    }

    async findOne(id: string): Promise<Product> {
        return this.prisma.product.findUnique({
            where: { id },
        });
    }

    async update(id: string, data: Partial<CreateProductDto>): Promise<Product> {
        return this.prisma.product.update({
            where: { id },
            data,
        });
    }

    async remove(id: string): Promise<Product> {
        return this.prisma.product.delete({
            where: { id },
        });
    }
}