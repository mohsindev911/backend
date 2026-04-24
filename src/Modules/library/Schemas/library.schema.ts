import {  Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Schema as MongooseSchema } from "mongoose";
import { Book } from "./book.schema";

@Schema()
export class Library extends Document {
   @Prop()
   title: string;

    @Prop()
    language: string;

    @Prop({type:MongooseSchema.Types.ObjectId, ref:'Book'})
    book: Book;
}
export const LibrarySchema = SchemaFactory.createForClass(Library);