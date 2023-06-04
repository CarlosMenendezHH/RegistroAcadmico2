import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { usuario } from '../models/Usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = `${environment.Host}/usuarios/MH100320`;

  constructor(private http: HttpClient) { }

  findAll(){
    const headers = this.getHeaders();
    return this.http.get<usuario[]>(this.url, { headers }).pipe(
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
