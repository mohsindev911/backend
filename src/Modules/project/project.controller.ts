import { Body, Controller, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor(
        private readonly projectService: ProjectService
    ){}

    @Post()
    async createProject(@Body() data: any) {
        return await this.projectService.createProject(data);
    }
}
