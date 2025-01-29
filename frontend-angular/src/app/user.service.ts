import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Esto asegura que el servicio sea singleton y accesible en toda la app
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/data';  // La URL de tu API

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
