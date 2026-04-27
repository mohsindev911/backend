import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './Schema/admin.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AdminService {
    constructor(
@InjectModel(Admin.name) private AdminModel:Model<Admin>,   
private jwtService:JwtService     
    ){}

    async signUp(data: {email:string, password:string}):Promise<Admin>{
        const hashedPassword=await bcrypt.hash(data.password, 10);
        const newAdmin=await this.AdminModel.create(
            {email:data.email, password:hashedPassword}
        );
         return newAdmin.save();   
    }

    async login( email:string, passsword:string){
const user=await this.AdminModel.findOne({email})
if(!user) {
    throw new UnauthorizedException("invalid password or email");

};
const IsMatch=await bcrypt.compare(passsword, user.password);
if(!IsMatch){
    throw new UnauthorizedException("invalid password or email");
} 
const payload={email:user.email, sub:user._id}
return{
    access_token:this.jwtService.sign(payload)
}
    }
}
