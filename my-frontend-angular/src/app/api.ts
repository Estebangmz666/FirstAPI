// src/app/api.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FavoriteProgrammingLanguage } from './FavoriteProgramingLanguage';

interface User {
  name: string;
  email: string;
  age: number;
  favoriteProgrammingLanguage: FavoriteProgrammingLanguage;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Api {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  signupUser(user: User): Observable<string> {
    return this.http.post(`${this.baseUrl}/user/signup`, user, { responseType: 'text' });
  }

  getGreeting(): Observable<string> {
    return this.http.get(`${this.baseUrl}/`, { responseType: 'text' });
  }

  getHello(): Observable<string> {
    return this.http.get(`${this.baseUrl}/hello`, { responseType: 'text' });
  }

  getPersonalizedGreeting(username: string): Observable<string> {
    return this.http.get(`${this.baseUrl}/hello/${username}`, { responseType: 'text' });
  }

  getTestUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user`);
  }
}