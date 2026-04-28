import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, IsEmail  } from "class-validator";


@InputType()
export class ClientInputDto {
    
 @IsString()
 @Field()
 @IsNotEmpty()
 name:string

 @IsString()
 @Field({nullable:true})
 username?:string

 @IsEmail()
 @Field()
 @IsNotEmpty()
 email:string

}