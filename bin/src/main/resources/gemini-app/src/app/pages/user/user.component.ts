import { UserService } from './../../service/user.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  userForm: FormGroup;

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.createform(new User())
  }

  createform(user: User) {
    this.userForm = new FormGroup({
      id: new FormControl(user.id),
      name: new FormControl(user.name),
      email: new FormControl(user.email),
      password: new FormControl(user.password)
    })
  }

  matcher = new MyErrorStateMatcher();

  confirm(){
    let user = new User()
    this.userForm.controls['id'].value? user.id = this.userForm.controls['id'].value: null;
    user.name = this.userForm.controls['name'].value
    user.email = this.userForm.controls['email'].value
    user.password = this.userForm.controls['password'].value
    console.log(user);
    this.service.postUser(user).toPromise().then(data=>{
      alert("Cadastro realizado com sucesso!")
    })
  }

}
