import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {
 
  ass: Array<any> = [{nome:1},{nome:2},{nome:3},{nome:4},{nome:2},{nome:3}]
  constructor() { }

  ngOnInit(): void {
  }

}
