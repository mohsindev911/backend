import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from './Schema/admin.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/Strategies/jwt.strategy';

@Module({
  imports:[
MongooseModule.forFeature([{name:Admin.name, schema: AdminSchema}]),
  JwtModule.registerAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory :(config:ConfigService) =>({
      secret:config.get<string>('JWT_SECRET'),
      signOptions:{expiresIn:'1h'}
    })
  })

  ],
  providers: [AdminService, JwtStrategy],
  controllers: [AdminController]
})
export class AdminModule {}
