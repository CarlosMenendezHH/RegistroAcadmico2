import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { notasAcademicas } from '../models/notasAcademicas';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private url: string = `${environment.Host}/notas/MH100320`;

  private url2: string = `${environment.Host}/notas/MH100320`
  constructor(private http: HttpClient) {  }

  findAll(){
    const headers = this.getHeaders();
    return this.http.get<notasAcademicas[]>(this.url, { headers }).pipe(
      map(response => {
        if (Array.isArray(response)) {
          return response;
        } else {
          return [response];
        }
      })
    );
  }

  private getHeaders() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3VhcmlvIiwicGFzc3dvcmQiOiJjbGF2ZSJ9.ikgkoDwwdWsChWJ51RvsHTl1ogTEijgDtqn1VYQnbUc'; // Reemplaza con tu token de autenticación
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}
