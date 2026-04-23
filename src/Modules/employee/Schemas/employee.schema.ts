import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import {Schema as MongooseSchema} from "mongoose";
import { EmployeeProfile } from "./profile.schema";

@Schema()
export class Employee extends Document{
  @Prop()
  age:number;

  @Prop()
  qualification:string;

  @Prop({type:MongooseSchema.Types.ObjectId, ref:'EmployeeProfile'})
  profile:EmployeeProfile;

  
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);