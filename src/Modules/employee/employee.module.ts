import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {  EmployeeProfile, EmployeeProfileSchema} from './Schemas/profile.schema';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Employee, EmployeeSchema } from './Schemas/employee.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Employee.name, schema: EmployeeSchema}]),
    MongooseModule.forFeature([{name:EmployeeProfile.name, schema: EmployeeProfileSchema}])
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
