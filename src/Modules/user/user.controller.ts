import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UppercasePipe } from 'src/custom/pipes/uppercase/uppercase.pipe';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('user')
export class UserController {
constructor(
    private readonly userService:UserService
){}

    @Get()
    @UseGuards(AuthGuard)
    getAllUsers(){
        return  this.userService.getAllUsers();
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    getUserByid(@Param('id') id: string){
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