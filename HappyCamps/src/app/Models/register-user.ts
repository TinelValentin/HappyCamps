import { Roles } from "./roles"

export interface RegiserUserModel{
    firstname:string
    lastname:string
    email:string
    password:string
    birthdate:Date
    city:string
    phonenumber:string
    instagram:string
    role:Roles
}