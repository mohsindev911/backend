import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import  { Document } from "mongoose";
import { ProductTags } from "./Tags.schema";

@Schema()
export class Product extends Document{
    @Prop()
    title:string

    @Prop()
    price:number

    @Prop()
    description:string

    @Prop({type:[ProductTags]})
    tags:ProductTags[]
}
export const ProductSchema = SchemaFactory.createForClass(Product)