import { Client } from './client.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = "http://localhost:3001/clients"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']


    })
  }
  create(client: Client): Observable<Client> {

    return this.http.post<Client>(this.baseUrl, client).pipe(map((obj) => obj),
      catchError(e => this.errorHandler(e))

    )
  }

  

  read(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )

  }

  readById(id: any): Observable<Client> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Client>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )

  }

  update(provider: Client): Observable<Client> {
    const url = `${this.baseUrl}/${provider.id}`
    return this.http.put<Client>(url, provider).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )


  }

  delete(id: any): Observable<Client> {

    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Client>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )

  }

  errorHandler(e: any): Observable<any> {
    
    this.showMessage("Ocorreu um erro!",true)
    return EMPTY

  }

}
