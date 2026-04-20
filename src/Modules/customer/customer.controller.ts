import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { RoleGuard } from 'src/guards/role/role.guard';
import {   Roles } from 'src/guards/role/role.decorator';
import { Role } from 'src/guards/role/role.enums';

@Controller('customer')
export class CustomerController {
constructor(
    private readonly customerService:CustomerService
){}
    @Get()
    @UseGuards(RoleGuard)
    @Roles(Role.Admin)
    getAllCustomers(){
return this.customerService.getAllCustomers();
}

@Post()
@UseGuards(RoleGuard)
@Roles(Role.Admin)
createCustomer(@Body() data:CreateCustomerDto){
    return this.customerService.createCustomer(data)
}
}
