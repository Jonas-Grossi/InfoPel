import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from './login.model';
import { LoginService } from './login.service';
import {  EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logins: Login[] = [];


  public userAutentication: boolean = false
  showMenuEmmitter = new EventEmitter<boolean>()




  constructor(private loginService: LoginService,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }




  fazerlogin(usuario: string, senha: string): void {
    this.loginService.read().subscribe(logins => {
      this.logins = logins

      
    })
    let bancoLogin = JSON.stringify(this.logins)


    if (bancoLogin.includes(usuario)==true  && bancoLogin.includes(senha)== true) {
      this.loginService.showMessage("Logando....")
      this.userAutentication = true
      this.showMenuEmmitter.emit(true)
      this.router.navigate(['/'])
    } else {

      this.loginService.showMessage("Usuario ou Senha invalidos....")
      this.userAutentication = false
      this.showMenuEmmitter.emit(false)
    }

  }

  userOnAutentication(){

    return this.userAutentication

  }

}














