import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './Schema/admin.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('admin')
export class AdminController {
    constructor(
        private AdminService:AdminService
    ){}

    @Post('signup')
    signup(@Body() data:{email:string, password:string}):Promise<Admin>{
        return this.AdminService.signUp(data)
    }

    @Post('login')
    login(@Body() data:{email:string, password:string}){
        return this.AdminService.login(data.email, data.password)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    profile(@Request() req){
        return req.user
    }
}
