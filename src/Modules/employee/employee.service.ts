import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from './Schemas/employee.schema';
import { EmployeeProfile } from './Schemas/profile.schema';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(Employee.name) private EmployeeModel:Model<Employee>,
        @InjectModel(EmployeeProfile.name) private ProfileModel:Model<EmployeeProfile>
    ){}

  async createEmployee(Data: Partial<Employee>): Promise<Employee> {
  const newProfile = await new this.ProfileModel(Data.profile).save();
  const newEmployee = new this.EmployeeModel({
    ...Data,
    profile: newProfile._id,
  });
  return await newEmployee.save();
}

  async getAllEmployees(): Promise<Employee[]> {
    return this.EmployeeModel.find().populate('profile').exec();
    }

    async getEmployeeById(id: string): Promise<Employee> {
        const employeeId= await  this.EmployeeModel.findById(id).populate('profile').exec(); 
        if(!employeeId) throw new Error('Employee not found');
        return employeeId;
    }

    async getEmployeebyProfileId(profileId: string): Promise<Employee> {
        const employee = await this.EmployeeModel.findOne({ profile: profileId }).populate('profile').exec();
        if (!employee) throw new Error('Employee not found');
        return employee;
    }
}
