import { HttpException, Injectable } from '@nestjs/common';
import { Customer } from './Interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private Customers:Customer[]=[];

    getAllCustomers():Customer[]{
        return this.Customers;
    }

    getCustomerById(id:number):Customer{
        const customerid=this.Customers.find(customer=> customer.id===id)
        if(!customerid) throw new HttpException('Customer not found', 404);
        return customerid
    }

    createCustomer(createCustomerDto:CreateCustomerDto):Customer{
        const newCustomer:Customer={
            id:Date.now(),
            ...createCustomerDto
        }
        this.Customers.push(newCustomer);
        return newCustomer;
        }

        


    }

