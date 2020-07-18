import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {url} from '../SERVICE_URL';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient) { }

  login(payload) {
    return this._http.post(url.login, payload)
  }

  register(payload){
   return this._http.post(url.register, payload)
  }
}
