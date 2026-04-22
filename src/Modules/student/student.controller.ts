import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {
    constructor(
        private readonly studentService:StudentService
    ){}
    @Post()
    async CreateStudent(@Body() data:Partial<Student>){
        return this.studentService.CreateStudent(data);
    }

    @Get()
    async GetAllStudents(){
        return this.studentService.GetAllStudents();
    }

    @Get(':id')
    async GetStudentById(@Param('id') id: string){
        return this.studentService.GetStudentById(id);
    }

    @Put(':id')
    async updateStudent(@Param('id') id: string, @Body() data:Partial<Student>){
        return this.studentService.updateStudent(id, data);
    }

    @Delete(':id')
        async deleteStudent(@Param('id') id: string){
        return this.studentService.deleteStudent(id);
        }
        
}

