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
import { TeacherModule } from './Modules/teacher/teacher.module';
import { EmployeeModule } from './Modules/employee/employee.module';
import { ProductModule } from './Modules/product/product.module';
import { LibraryModule } from './Modules/library/library.module';
import { ProjectModule } from './Modules/project/project.module';
import { AdminModule } from './Modules/admin/admin.module';
import { ClientModule } from './Modules/client/client.module';
import { GraphQLModule, } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ClientResolver } from './Modules/client/resolver/client.resolver';


@Module({
  imports: [UserModule, CustomerModule, 
    ConfigModule.forRoot({
    isGlobal:true
  }
  ),
GraphQLModule.forRoot<ApolloDriverConfig>({
driver:ApolloDriver,
autoSchemaFile:join(process.cwd(), 'src/schema.graphql'),
playground:true,
sortSchema:true
}),
    MongooseModule.forRoot(process.env.MongoDb_Url!),
    StudentModule,
    TeacherModule,
    EmployeeModule,
    ProductModule,
    LibraryModule,
    ProjectModule,
    AdminModule,
    ClientModule
  ],
  controllers: [AppController,  ],
  providers: [AppService, DatabaseService, EvService, ClientResolver, ],
})
export class AppModule  {}
