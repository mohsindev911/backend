import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientResolver } from './resolver/client.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Client,clientSchema } from './model/client.model';

@Module({
  imports:[
MongooseModule.forFeature([{
  name:Client.name, schema:clientSchema
}])
  ],
  providers: [ClientService, ClientResolver]
})
export class ClientModule {}
