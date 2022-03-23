import { TurmaService } from 'src/app/service/turma.service';
import { Turma } from 'src/app/model/turma';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from './../../../service/user.service';
import { User } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  userForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Turma, private userService: UserService, public dialogRef: MatDialogRef<StudentCreateComponent>, private turmaService: TurmaService) { }

  ngOnInit(): void {
    this.createform(new User());
    console.log("Turma para add user", this.data)
  }

  createform(user: User) {
    this.userForm = new FormGroup({
      email: new FormControl(user.email, [
        Validators.required,
        Validators.email,
      ])
    });
  }

  onConfirm(){
    this.userService.getByEmail(this.userForm.controls['email'].value).subscribe(result=>{
      let u = new User();
      u.id = result['id'];
      u.name = result['name'];
      u.email = result['email'];
      this.data.studentList.push(u);
      this.turmaService.updateTurma(this.data).subscribe(date1=>{
        this.dialogRef.close()
      })
    })
    
  }

}
