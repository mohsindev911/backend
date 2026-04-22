import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Modules/user/user.module';
import { CustomerModule } from './Modules/customer/customer.module';
import { DatabaseService } from './database/database.service';
import { EvService } from './services/ev/ev.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './Modules/student/student.module';


@Module({
  imports: [UserModule, CustomerModule, ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MongoDb_Url!),
    StudentModule
  ],
  controllers: [AppController,  ],
  providers: [AppService, DatabaseService, EvService, ],
})
export class AppModule  {}
