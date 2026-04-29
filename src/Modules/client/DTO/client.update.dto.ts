import { Field, ID, InputType, PartialType } from "@nestjs/graphql";
import { ClientInputDto } from "./client.input.dto";
import { IsNotEmpty } from "class-validator";


@InputType()
export class ClientUpdateDto extends PartialType(ClientInputDto) {
  @Field( () => ID)
  @IsNotEmpty()
  id:string

}