import { SimpleMessageService } from 'src/app/service/simple-message.service';
import { LoginUser } from './../../model/login-user';
import { LoginUserService } from './../../service/login.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  userForm: FormGroup;

  constructor(
    private loginService: LoginUserService,
    private messageService: SimpleMessageService
  ) {}

  ngOnInit(): void {
    this.createform(new User());
  }

  createform(user: User) {
    this.userForm = new FormGroup({
      email: new FormControl(user.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(user.password),
    });
  }

  matcher = new MyErrorStateMatcher();

  confirm() {}

  public loginUser = () => {
    let email =
      this.userForm &&
      this.userForm.get('email') &&
      this.userForm.get('email').value;
    let password =
      this.userForm &&
      this.userForm.get('password') &&
      this.userForm.get('password').value;

    console.log(this.userForm);

    let loginUser: LoginUser = new LoginUser();

    loginUser.email = email;
    loginUser.password = password;

    this.loginService.loginUser(loginUser);
  };
}
