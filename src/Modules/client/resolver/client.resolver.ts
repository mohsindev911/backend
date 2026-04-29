import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Client } from '../model/client.model';
import { ClientService } from '../client.service';
import { ClientInputDto } from '../DTO/client.input.dto';
import { ClientUpdateDto } from '../DTO/client.update.dto';

@Resolver(()=> Client)
export class ClientResolver {
constructor(
    private readonly clientService:ClientService
){}

@Query(()=> [Client] , {name:'getAllClients'})
async getAllClients(){
    return this.clientService.getAll();
}

@Query(()=> Client, {name:'getclient'})
async getById(@Args('id', {type:()=> String})id:string){
return this.clientService.getOne(id)
}

@Mutation(()=> Client)
async create(@Args('input') input:ClientInputDto){
    return this.clientService.CreateClient(input)
}

@Mutation(()=> Client)
async UpdateClient(@Args('input')input:ClientUpdateDto){
    return this.clientService.Update(input)
}


}
