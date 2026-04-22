import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseFilters, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UppercasePipe } from 'src/custom/pipes/uppercase/uppercase.pipe';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

@Controller('user')
@UseFilters(HttpExceptionFilter)
export class UserController {
constructor(
    private readonly userService:UserService,

){}

    @Get()
    @UseGuards(AuthGuard)
    getAllUsers(){
        return  this.userService.getAllUsers();
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    getUserByid(@Param('id', ParseIntPipe) id: string){

        return this.userService.getUserByid(Number(id));
    }

@Post()
createUser(
  @Body('name', new UppercasePipe()) name: string,
  @Body('age') age: number
) {
  const user = this.userService.createUser(name, age);

  return {
    message: `Hello, ${name}!`,
    data: user,
  };
}

@Put(':id')
updateUser(@Param('id') id: string, @Body() Data:{name:string,age:number}){
    return this.userService.updateUser(Number(id),Data.name,Data.age);
    
}

@Patch(':id')
patchUser(@Param('id') id: string, @Body() Data:{name:string,age:number}){
    return this.userService.patchUser(Number(id),Data.name,Data.age);
}
@Delete(':id')
deleteUser(@Param('id') id: string){
    return this.userService.deleteUser(Number(id));
}
}