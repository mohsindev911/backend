import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { EvService } from './services/ev/ev.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly databaseService: DatabaseService,
    private readonly evService:EvService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
 @Get('db-status')
 getstatus(){
  return {
    status: this.databaseService.getStatus()
  }
 }
 

}
