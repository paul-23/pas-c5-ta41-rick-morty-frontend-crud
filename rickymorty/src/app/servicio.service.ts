import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { Chars } from 'src/model/chars.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiUrl = "http://localhost:3000/characters";

  constructor(private http: HttpClient) { }

  listarPersonajes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  guardarPersonaje(personaje: Chars): Observable<any> {
    return this.http.post(this.apiUrl, personaje).pipe(
      // Obtenemos la id que se genera automaticamente para crear la url de la img
      switchMap((response: any) => {
        const generatedId = response?.id || '';
        personaje.image = "https://rickandmortyapi.com/api/character/avatar/" + generatedId + ".jpeg";
        return this.http.put(this.apiUrl + '/' + generatedId, personaje);
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  getPersonaje(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  actualizarPersonaje(id: string, personaje: Chars): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, personaje);
  }

  eliminarPersonaje(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

}
