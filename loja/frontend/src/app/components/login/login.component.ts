import { AuthService } from './auth.service';
import './login.component.css';
import { Login } from './login.model';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = {
    user: '',
    pass: ''
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  
    
  }
  logar(): void {

    this.authService.fazerlogin(this.login.user, this.login.pass)


  }

  cancel(): void {

    this.router.navigate(['/login'])

  }

}
