import { SetMetadata } from "@nestjs/common";


export const Role_Key='roles';

export const Roles=(...roles:string[])=> SetMetadata(Role_Key,roles);