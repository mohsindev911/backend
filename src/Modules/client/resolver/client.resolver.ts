import { Mutation, Resolver } from '@nestjs/graphql';
import { Client } from '../model/client.model';
import { ClientService } from '../client.service';
import { ClientInputDto } from '../DTO/client.input.dto';

@Resolver(()=> Client)
export class ClientResolver {
constructor(
    private readonly clientService:ClientService
){}

@Mutation()
async create(data:ClientInputDto){
    return this.clientService.CreateClient(data)
}
}
