import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './Schemas/project.schema';
import { Model } from 'mongoose';
import { Developer } from './Schemas/developer.schema';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Project.name) private ProjectModel: Model<Project>,
        @InjectModel(Developer.name) private DeveloperModel:Model<Developer>
    ){}

async createProject(data: any): Promise<Project> {
  let developerIds: any[] = [];
  if (Array.isArray(data.developers) && data.developers.length) {
    const createdDevelopers = await this.DeveloperModel.insertMany(data.developers);
    developerIds = createdDevelopers.map(dev => dev._id);
  }

  const newProject = new this.ProjectModel({
    ...data,
    developers: developerIds,
  });

  const savedProject = await newProject.save();
  if (developerIds.length) {
    await this.DeveloperModel.updateMany(
      { _id: { $in: developerIds } },
      { $push: { projects: savedProject._id } }
    );
}
  return savedProject;
}
}