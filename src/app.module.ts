import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Modules/user/user.module';
import { CustomerModule } from './Modules/customer/customer.module';
import { DatabaseService } from './database/database.service';
import { EvService } from './services/ev/ev.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [UserModule, CustomerModule, ConfigModule.forRoot({
    isGlobal:true,
  })],
  controllers: [AppController,  ],
  providers: [AppService, DatabaseService, EvService, ],
})
export class AppModule  {}
