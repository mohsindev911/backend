import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { Teacher } from './Schemas/teacher.schema';

@Controller('teacher')
export class TeacherController {
    constructor(
        private readonly teacherService:TeacherService
    ){}

    @Post()
    async CreateTeacher(@Body() data:Partial<Teacher>){
        return this.teacherService.CreateTeacher(data);
    }

    @Get()
    async GetAllTeachers(){
        return this.teacherService.GetAllTeachers();
    }

    @Get(':id')
    async GetTeacherById(@Param('id') id: string){
        return this.teacherService.GetTeacherById(id);
    }

    @Put(':id')
    async UpdateTeacher(@Param('id') id: string, @Body() data:Partial<Teacher>){
        return this.teacherService.updateTeacher(id, data);
    }

    @Delete(':id')
    async DeleteTeacher(@Param('id') id: string){
        return this.teacherService.deleteTeacher(id);
    }
}
