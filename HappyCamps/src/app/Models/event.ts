import { User } from "./user";

export interface Event {
    id: number;
    name: string;
    description: string;
    points: number;
    location: string;
    startDate: Date;
    endDate: Date;
    organizer: User;
}