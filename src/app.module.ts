import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Modules/user/user.module';
import { CustomerModule } from './Modules/customer/customer.module';

@Module({
  imports: [UserModule, CustomerModule],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
