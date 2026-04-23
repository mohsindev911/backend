import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class EmployeeProfile extends Document{
    @Prop()
    name: string;

    @Prop()
    email: string;
}
export const EmployeeProfileSchema = SchemaFactory.createForClass(EmployeeProfile);