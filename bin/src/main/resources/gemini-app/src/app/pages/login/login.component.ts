import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  userForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createform(new User())
  }

  createform(user: User) {
    this.userForm = new FormGroup({
      id: new FormControl(user.id),
      name: new FormControl(user.name, [Validators.required]),
      email: new FormControl(user.email, [Validators.required,
      Validators.email,]),
      password: new FormControl(user.password)
    })
  }

  matcher = new MyErrorStateMatcher();

  confirm(){
    alert("Botao funfou")
  }

}
