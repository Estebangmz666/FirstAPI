import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FavoriteProgrammingLanguage } from '../models/favorite-programming-language';
import { User } from '../models/user';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  signupUser(user: User): Observable<string> {
    return this.http.post(`${this.baseUrl}/user/signup`, user, { responseType: 'text' });
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/${id}`);
  }

  getTestUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user`);
  }
}