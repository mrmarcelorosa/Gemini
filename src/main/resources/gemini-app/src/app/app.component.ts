import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gemini-app';

  openNav() {
    console.log("Teste")
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    console.log("Fon")
    document.getElementById("mySidenav").style.width = "0";
    }
}


