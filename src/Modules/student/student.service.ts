import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private studentModel:Model<StudentDocument>
    ){}

    async CreateStudent(data:Partial<Student>):Promise<Student>{
        const newStudent=new this.studentModel(data);
        if(!newStudent) throw new NotFoundException('Failed to create student');
        return newStudent.save();
    }

    async GetAllStudents():Promise<Student[]>{
        return this.studentModel.find().exec();
    }

    async GetStudentById(id:string):Promise<Student | null>{
        const student = await this.studentModel.findById(id).exec();
        if(!student) throw new NotFoundException('Student not found');
        return student;
    }

    async updateStudent(id:string, data:Partial<Student>):Promise<Student | null>{
        const student = await this.studentModel.findOneAndUpdate({_id:id}, data, {new:true}).exec();
        if(!student) throw new NotFoundException('Student not found');
        return student;
    }
 
    async deleteStudent(id:string):Promise<Student | null>{
        const student = await this.studentModel.findByIdAndDelete(id).exec();
        if(!student) throw new NotFoundException('Student not found');
        return student;
    }
}
