import { IsEmail, IsInt,  IsString } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    name:string;
    @IsEmail()
    email:string;
    @IsInt()
    age:number
}