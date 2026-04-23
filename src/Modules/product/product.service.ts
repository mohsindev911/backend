import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './Schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private ProductModel:Model<Product>
    ){}

    async CreateProduct(Data:Partial<Product>):Promise<Product>{
        const newProduct = new this.ProductModel(Data)
        return newProduct.save()
        
    }

    async GetAllProducts():Promise<Product[]>{
        return this.ProductModel.find().exec()
    }

    async GetProductById(id:string):Promise<Product>{
        const product = await this.ProductModel.findById(id).exec()
        if (!product) {
            throw new Error('Product not found')
        }
        return product
    }

    async UpdateProduct(id:string, Data:Partial<Product>):Promise<Product>{
        const product = await this.ProductModel.findByIdAndUpdate(id, Data, {new:true}).exec()
        if (!product) {
            throw new Error('Product not found')
        }
        return product
    }

    async DeleteProduct(id:string):Promise<Product>{
        const product = await this.ProductModel.findByIdAndDelete(id).exec()
        if (!product) {
            throw new Error('Product not found')
        }
        return product
    }
}
