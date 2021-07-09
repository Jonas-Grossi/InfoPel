import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
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
  create(employee: Employee): Observable<Employee> {

    return this.http.post<Employee>(this.baseUrl, employee).pipe(map((obj) => obj),
      catchError(e => this.errorHandler(e))

    )
  }

  

  read(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )

  }

  readById(id: any): Observable<Employee> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Employee>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )

  }

  update(employee: Employee): Observable<Employee> {
    const url = `${this.baseUrl}/${employee.id}`
    return this.http.put<Employee>(url, employee).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )


  }

  delete(id: any): Observable<Employee> {

    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Employee>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )

  }

  errorHandler(e: any): Observable<any> {
    
    this.showMessage("Ocorreu um erro!",true)
    return EMPTY

  }

}
