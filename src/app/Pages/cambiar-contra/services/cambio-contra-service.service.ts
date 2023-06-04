import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CambioContraServiceService {
  private url: string = `${environment.Host}/usuario`;

  constructor(private http: HttpClient) { }

  changePassword(currentPassword: string, newPassword: string) {
    const payload = { currentPassword, newPassword };
    return this.http.put(`${this.url}`, payload);
  }
}
