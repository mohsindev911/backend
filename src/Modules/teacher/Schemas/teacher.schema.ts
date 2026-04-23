import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Address } from "./address.schema";
import { Document } from "mongoose";


@Schema()
export class Teacher extends Document{
    @Prop({required:true})
    name: string;

    @Prop({required:true})
    email: string;

    @Prop({required:true})
    age: number;

    @Prop({type: Address})
    address: Address;

}
export const TeacherSchema = SchemaFactory.createForClass(Teacher);


