import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { grupos } from '../models/grupos';

@Injectable({
  providedIn: 'root'
})
export class GruposServiceService {
  private url: string = `${environment.Host}/grupos`;

  constructor(private http: HttpClient) { }

  findAll(){
    const headers = this.getHeaders();
    return this.http.get<grupos[]>(this.url, { headers })
  }

  private getHeaders() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3VhcmlvIiwicGFzc3dvcmQiOiJjbGF2ZSJ9.zB0zLsUDM6VpZQiub0jTQlc29EsX-kNgY2EMC4ZHP4w'; // Reemplaza con tu token de autenticación
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}
