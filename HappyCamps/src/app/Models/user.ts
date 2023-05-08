import { AuthGroup } from "./authGroup";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthDate: Date;
    phoneNumber: string;
    city: string;
    instagram: string;
    points: number;
    accepted: boolean;
    isActive: boolean;
    isAspirant: boolean;
    age:number;
    authGroup:AuthGroup;
}