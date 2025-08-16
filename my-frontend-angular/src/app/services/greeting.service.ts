import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getWelcomeMessage(): Observable<string> {
    return this.http.get(`${this.baseUrl}/`, { responseType: 'text' });
  }

  getHelloMessage(): Observable<string> {
    return this.http.get(`${this.baseUrl}/hello`, { responseType: 'text' });
  }

  getPersonalizedGreeting(username: string): Observable<string> {
    return this.http.get(`${this.baseUrl}/hello/${username}`, { responseType: 'text' });
  }
}