import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  result: any;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.login(this.loginForm.value).subscribe(
      res => localStorage.setItem('token', res['token']));
  }






}
