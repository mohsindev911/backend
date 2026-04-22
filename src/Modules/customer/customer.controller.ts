import { Body, Controller, Get, HttpException, Param, ParseIntPipe, Post, UseFilters, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { RoleGuard } from 'src/guards/role/role.guard';
import {   Roles } from 'src/guards/role/role.decorator';
import { Role } from 'src/guards/role/role.enums';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

@Controller('customer')
@UseFilters(HttpExceptionFilter)
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
@Get(':id')
@UseGuards(RoleGuard)
@Roles(Role.Admin)
getCustomerById(@Param('id', ParseIntPipe) id:number){
    return this.customerService.getCustomerById(Number(id));
}
@Post()
@UseGuards(RoleGuard)
@Roles(Role.Admin)
createCustomer(@Body() data:CreateCustomerDto){
    return this.customerService.createCustomer(data)
}
}
