import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ErrorMessage } from '../../Enums/ErrorMessage';
import Helper from '../../utils/Helper';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _fb: FormBuilder, private _auth : AuthService){}


  ngOnInit(): void {
    this.initForm();
  }

  get ErrorMessage(){
    return ErrorMessage;
  }

  get Helper(){
    return Helper;
  }

  initForm() {
    this.loginForm = this._fb.group({
      username: [''],
      password: ['']
    })
  }

  login() {
     Helper.setValidators(this.loginForm);
    if(this.loginForm.valid)
    this._auth.login(this.loginForm.value).subscribe((response) => {
      console.log(response)
    })
  }
}
