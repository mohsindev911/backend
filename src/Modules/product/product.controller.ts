import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './Schemas/product.schema';

@Controller('product')
export class ProductController {
    constructor(
        private readonly ProductService:ProductService
    ){}

    @Post()
    async CreateProduct(@Body() Data:Partial<Product>){
        return this.ProductService.CreateProduct(Data)
    }

    @Get()
    async GetAllProducts(){
        return this.ProductService.GetAllProducts()
    }

    @Get(':id')
    async GetProductById(@Param('id') id:string){
        return this.ProductService.GetProductById(id)
    }
    
    @Put(':id')
    async UpdateProduct(@Param('id') id:string, @Body() Data:Partial<Product>){
        return this.ProductService.UpdateProduct(id, Data)
    }

    @Delete(':id')
    async DeleteProduct(@Param('id') id:string){
        return this.ProductService.DeleteProduct(id)
    }


}
