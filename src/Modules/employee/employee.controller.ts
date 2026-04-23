import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { EmployeeService } from './employee.service';
import { Employee } from './Schemas/employee.schema';

@Controller('employee')
export class EmployeeController {
    constructor(
        private readonly employeeService: EmployeeService
    ){}

    @Post()
    async createEmployee(@Body() employeeData: Partial<Employee>) {
        return this.employeeService.createEmployee(employeeData);
    }

    @Get()
    async getAllEmployees() {
        return this.employeeService.getAllEmployees();
    }

    @Get(':id')
    async getEmployeeById(@Param('id') id: string) {
        return this.employeeService.getEmployeeById(id);
    }
    @Get('profile/:profileId')
    async getEmployeeByProfileId(@Param('profileId') profileId: string) {
        return this.employeeService.getEmployeebyProfileId(profileId);
    }
}
