import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Modules/user/user.module';
import { CustomerModule } from './Modules/customer/customer.module';
import { DatabaseService } from './database/database.service';


@Module({
  imports: [UserModule, CustomerModule],
  controllers: [AppController,  ],
  providers: [AppService, DatabaseService, ],
})
export class AppModule  {}
