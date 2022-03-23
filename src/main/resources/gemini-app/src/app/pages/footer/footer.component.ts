import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validarLogado() {
    if (localStorage.getItem('user_data') == '' || localStorage.getItem('user_data') == null) {
      console.log("não mostrar")
      return false;
    }else{
      console.log("mostrar")
      return true;
    }
  }

}
