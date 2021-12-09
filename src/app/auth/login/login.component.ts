import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public LoginUserFormGroup: FormGroup;
  constructor( private route: Router, private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.LoginUserFormGroup = this.fb.group({
      email:['harshivchag@gmail.com',[Validators.required, Validators.email]],
      password:['nothing@1',[Validators.required]],
      });
  }

  public LoginUser(){
    const data = {
      'email':this.LoginUserFormGroup.value.email,
      'password':this.LoginUserFormGroup.value.password
    }
    this.authService.login(data).subscribe(result =>{
      localStorage.setItem('token', result["accessToken"]);
      this.route.navigate(['/']);
    });
  }


  public checkUserError = (controlName: string, errorName: string) => {
    return this.LoginUserFormGroup.controls[controlName].hasError(errorName);
  }
}
