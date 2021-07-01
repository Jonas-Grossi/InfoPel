import { Provider } from './provider.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  baseUrl = "http://localhost:3001/providers"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']


    })
  }
  create(provider: Provider): Observable<Provider> {

    return this.http.post<Provider>(this.baseUrl, provider).pipe(map((obj) => obj),
      catchError(e => this.errorHandler(e))

    )
  }

  

  read(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.baseUrl).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )

  }

  readById(id: any): Observable<Provider> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Provider>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )

  }

  update(provider: Provider): Observable<Provider> {
    const url = `${this.baseUrl}/${provider.id}`
    return this.http.put<Provider>(url, provider).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )


  }

  delete(id: any): Observable<Provider> {

    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Provider>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))

  )

  }

  errorHandler(e: any): Observable<any> {
    
    this.showMessage("Ocorreu um erro!",true)
    return EMPTY

  }

}
