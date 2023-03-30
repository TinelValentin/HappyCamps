import { Roles } from "./roles";

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
    roleType: Roles;
    points: number;
    accepted: boolean;
    isActive: boolean;
    isAspirant: boolean;
}