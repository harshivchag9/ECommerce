import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public UserRegisterFormGroup: FormGroup;
  constructor( private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.UserRegisterFormGroup = this.fb.group({
      username:['harshiv chag',{validators:[Validators.required], asyncValidators:[]}],
      email:['harshivchag@gmail.com',[Validators.required, Validators.email]],
      password:['harshivchag',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword:['harshivchag',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
      },{
        validator:[this.ConfirmPasswordValidator("password", "confirmPassword")]
    });
  }

  public ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName]
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmPasswordValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  public RegisterUser(){
    if (this.UserRegisterFormGroup.valid ) {
      let data = {
        name:this.UserRegisterFormGroup.value.username,
        email:this.UserRegisterFormGroup.value.email,
        password:this.UserRegisterFormGroup.value.password,
      }
      this.authService.register(data).subscribe(result=>{
        alert("User Registered Successfully");
      })
    }
  }
  
 
  public checkUserError = (controlName: string, errorName: string) => {
    return this.UserRegisterFormGroup.controls[controlName].hasError(errorName);
  }
}

