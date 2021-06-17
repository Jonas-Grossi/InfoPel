import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = "http://localhost:3001/logins"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']


    })
  }

  errorHandler(e: any): Observable<any> {

    this.showMessage("Ocorreu um erro!", true)
    return EMPTY

  }
  read(): Observable<Login[]> {
    return this.http.get<Login[]>(this.baseUrl).pipe(map((obj) => obj),
      catchError(e => this.errorHandler(e))

    )

  }

  readById(id: any): Observable<Login> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Login>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )

  }  
  //veriUser(user: any,pass: any): Observable<Login> {

   // deleteProduct(): void {
   //   this.loginService.get(this.login.id).subscribe(() => {
       // this.productService.showMessage('Produto excluido com sucesso!!!')
        //this.router.navigate(['/products'])
     // })
  
  
    //}
}