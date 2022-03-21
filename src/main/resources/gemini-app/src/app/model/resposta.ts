import {User} from './user'
import {Questao} from './questao'
import {Grupo} from './Grupo'


export class Resposta{
    id: number;
    student: User;
    questao: Questao;
    grupo: Grupo;
    resposta: String;
}