import { User } from './user';

export class Turma {
    id: number;
    name: string;
    description: string;
    dateCreation: string;
    dateEnding: string;
    mananger: User;
    studentList: User[];
} 