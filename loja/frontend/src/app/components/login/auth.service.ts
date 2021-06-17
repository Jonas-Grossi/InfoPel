import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from './login.model';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logins: Login[] = [];



  //private usuarioAutenticado: boolean = false



  constructor(private loginService: LoginService,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }


    ngOnInit(): void {
    
      
  
  
    
    }


  fazerlogin(usuario: any,senha: any): void {
    this.loginService.read().subscribe(logins => {
      this.logins = logins
        
      //console.log(logins)
    })
        let bancoLogin =JSON.stringify(this.logins)
    
    
    if(bancoLogin.indexOf(usuario) > -1 &&  bancoLogin.indexOf(senha) > -1 ) {
      this.loginService.showMessage("Logando....")
      
      this.router.navigate(['/'])
          }else{

            this.loginService.showMessage("Usuario ou Senha invalidos....")


    }
    
  }


}














