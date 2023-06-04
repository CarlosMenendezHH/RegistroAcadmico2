import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { actividades } from '../models/Actividades';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarioacademicoService {

  private url: string = `${environment.Host}/actividadesCalendario`;

  constructor(private http: HttpClient) {  }

  getActivities(): Observable<actividades[]> {
    const headers = this.getHeaders();
    return this.http.get<actividades[]>(this.url, { headers });
  }

  private getHeaders() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3VhcmlvIiwicGFzc3dvcmQiOiJjbGF2ZSJ9.ikgkoDwwdWsChWJ51RvsHTl1ogTEijgDtqn1VYQnbUc'; // Reemplaza con tu token de autenticación
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}
