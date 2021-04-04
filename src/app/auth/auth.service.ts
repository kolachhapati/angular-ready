import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const authUrl = 'https://localhost:44346/api/';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isValidToken: boolean;
  constructor(private http: HttpClient) { }

  login(loginData: any) {
    return this.http.post(authUrl + 'Account/login', loginData);
  }


  isAuthenticated(): boolean {
    this.http.get(authUrl + 'Validate/validate').subscribe((res: any) => { this.isValidToken = true },
      (err: any) => {
        if (err.status == "401") {
          this.isValidToken = false;
        }
      });
    return this.isValidToken;
  }
}