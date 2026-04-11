import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private Users=[
        {id:1,name:'Mohsin',age:24},
        {id:2,name:'Ali',age:25},
        {id:3,name:'Ahmed',age:26},
    ]

    getAllUsers(){
        return this.Users;
    }

    getUserByid(id:number){
const user=this.Users.find(user=> user.id===id)
 return user;
 }

 createUser(name:string,age:number){
    const newUser=this.Users.push({id:Date.now(),name,age})
    return newUser;
 }

 updateUser(id:number, name:string,age:number){
    const user=this.Users.find(user=> user.id===id)
    if(!user){
return 'User not found';
    }
    user.name=name;
    user.age=age;
    return user;
 }

 patchUser(id:number, name:string,age:number){
    const user=this.Users.find(user=> user.id===id)
    if(!user){
return 'User not found';
    }
    if(user){
        user.name=name;
        user.age=age;
        return user;
    }
 }

 deleteUser(id:number){
    const userIndex=this.Users.findIndex(user=> user.id===id)
    if(userIndex===-1){
        return 'User not found';
    }
   const deletedUser= this.Users.splice(userIndex,1);
    return 'User deleted successfully' + ' ' + JSON.stringify(deletedUser);
 }
}
