import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './model/client.model';
import { Model } from 'mongoose';
import { ClientInputDto } from './DTO/client.input.dto';
import { ClientUpdateDto } from './DTO/client.update.dto';

@Injectable()
export class ClientService {
    constructor(
        @InjectModel(Client.name) private clientModel:Model<Client>
    ){}

    async CreateClient(data:ClientInputDto):Promise<Client>{
        const created= await new  this.clientModel(data);
        return created.save()

    }

    async getAll(){
        return this.clientModel.find().exec()
    }

    async getOne(id:string):Promise<Client>{
        const client= await  this.clientModel.findById(id).exec();
        if(!client) throw new NotFoundException(`not found user by this Id ${id}`)
        return client;
    }

    async Update(data:ClientUpdateDto):Promise<Client>{
        const client= await  this.clientModel.findById(data.id).exec();
         if(!client) throw new NotFoundException(`not found user by this Id ${data.id}`)
         Object.assign(client, data);
         return client.save()
    }
}
