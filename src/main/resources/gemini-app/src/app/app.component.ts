import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gemini-app';

  openNav() {
    //console.log("Teste")
    document.getElementById("mySidenav").style.width = "250px";

  }

  closeNav() {
    //console.log("Fon")
    document.getElementById("mySidenav").style.width = "0";
    }
  
    validarLogado() {
      if (localStorage.getItem('user_data') == '' || localStorage.getItem('user_data') == null) {
        //console.log(localStorage.getItem('user_data'));
        return false;
      }else{
        //console.log(localStorage.getItem('user_data'));
        return true;
      }
    }
    
}


