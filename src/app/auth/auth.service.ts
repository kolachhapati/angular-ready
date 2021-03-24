import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const authUrl= 'https://localhost:44346/api/Account/';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  login(loginData:any){
    return this.http.post(authUrl + 'login', loginData);
  }

}
