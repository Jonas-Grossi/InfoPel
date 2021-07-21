import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Funcionario } from './funcionario.model';



@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  baseUrl = "http://localhost:3001/employees"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']


    })
  }
  create(funcionario: Funcionario): Observable<Funcionario> {

    return this.http.post<Funcionario>(this.baseUrl, funcionario).pipe(map((obj) => obj),
      catchError(e => this.errorHandler(e))

    )
  }

  

  read(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.baseUrl).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )

  }

  readById(id: any): Observable<Funcionario> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Funcionario>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )

  }

  update(funcionario: Funcionario): Observable<Funcionario> {
    const url = `${this.baseUrl}/${funcionario.id}`
    return this.http.put<Funcionario>(url, funcionario).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )


  }

  delete(id: any): Observable<Funcionario> {

    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Funcionario>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )

  }

  errorHandler(e: any): Observable<any> {
    
    this.showMessage("Ocorreu um erro!",true)
    return EMPTY

  }

}
