import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Helper from '../../utils/Helper';

import  { FormStatus } from '../../Enums/FormStatus';
import  { ErrorMessage } from '../../Enums/ErrorMessage';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private _fb: FormBuilder, private _auth : AuthService) { }

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
    this.registerForm = this._fb.group({
      username: [''],
      email : [''],
      password: ['']
    })
  }

  register() {
    Helper.setValidators(this.registerForm);
    if(this.registerForm.valid)
    this._auth.register(this.registerForm.value).subscribe((response) => {
      console.log(response)
    })
  }


}
