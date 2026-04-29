import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ClientDocument = HydratedDocument<Client>;

@Schema()
@ObjectType()
export class Client {

  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop()
  @Field({ nullable: true })
  username?: string;

  @Prop({ required: true })
  @Field()
  email: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);