import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private router: Router
  ) { }

  login() {

    this.router.navigate(['../../protected/dashboard'])

  }

  handleLoginClick(){
    if(this.loginForm.get('email')?.value && this.loginForm.get('password')?.value){
      this.authenticateUser(this.loginForm.get('email')?.value );
    } else {
      console.log(this.loginForm.get('email')?.value )
      console.log(this.loginForm.get('password')?.value )
      alert('enter username and password');
    }

  }

  authenticateUser(userName: string){
    sessionStorage.setItem("user", userName);

    if(userName == "admin@gmail"){
      this.router.navigate(['../../admin/admin'])
    } else if(userName == "user@gmail"){
      this.router.navigate(['../../user/user'])
    } else {
      this.router.navigate(['../../protected/dashboard'])
    }
  }
}
