import { Body, Controller, Post } from '@nestjs/common';
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
}

