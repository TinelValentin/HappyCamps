import { Roles } from "./roles"

export class RegiserUserModel{
    firstname:string=""
    lastname:string=""
    email:string=""
    password:string=""
    birthdate:Date=new Date()
    city:string=""
    phonenumber:string=""
    instagram:string=""
    role:Roles;
}