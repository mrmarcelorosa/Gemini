import { User } from './user';
import { Grupo } from './Grupo';

export class Turma {
    id: number;
    name: string;
    description: string;
    dateCreation: string;
    dateEnding: string;
    mananger: User;
    studentList: User[];
    //groupList: Grupo[];
}
