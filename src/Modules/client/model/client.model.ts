import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
@ObjectType()
export class Client extends Document {
  
   @Field(() => ID)
   declare readonly _id:string;
   
   @Field()
   @Prop({required:true})
   name:string;

   
   @Prop()
   @Field({nullable:true})
   username?:string;

   @Prop({required:true})
   @Field()
   email:string;

}
export const clientSchema = SchemaFactory.createForClass(Client);