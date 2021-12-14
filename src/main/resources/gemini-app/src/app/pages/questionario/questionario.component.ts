import { QuestionarioService } from './../../service/questionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {
  questionarioList: Array<any> = [] 

  constructor(private service:QuestionarioService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().toPromise().then(data =>{
      this.questionarioList = data;
    })
  }

}
