import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from './Schemas/teacher.schema';
import { Model } from 'mongoose';

@Injectable()
export class TeacherService {
    constructor(
@InjectModel(Teacher.name) private TeacherModel:Model<Teacher>,
    ){}

    async CreateTeacher(data:Partial<Teacher>):Promise<Teacher>{
        const newTeacher=new this.TeacherModel(data);
        if(!newTeacher) throw new Error('Failed to create teacher');
        return newTeacher.save();
    }

    async GetAllTeachers():Promise<Teacher[]>{
        return this.TeacherModel.find().exec();
    }

    async GetTeacherById(id:string):Promise<Teacher | null>{
        const teacher = await this.TeacherModel.findById(id).exec();
        if(!teacher) throw new Error('Teacher not found');
        return teacher;
    }

    async updateTeacher(id:string, data:Partial<Teacher>):Promise<Teacher | null>{
        const teacher = await this.TeacherModel.findOneAndUpdate({_id:id}, data, {new:true}).exec();
        if(!teacher) throw new Error('Teacher not found');
        return teacher;
    }

    async deleteTeacher(id:string):Promise<Teacher | null>{
        const teacher = await this.TeacherModel.findByIdAndDelete(id).exec();
        if(!teacher) throw new Error('Teacher not found');
        return teacher;
    }
}
