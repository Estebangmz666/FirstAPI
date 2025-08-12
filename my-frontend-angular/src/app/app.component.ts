import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  private http = inject(HttpClient);
  
  message: string = '';
  loading: boolean = false;
  error: string = '';
  username: String = "";

  getGreeting() {
    this.clearStatus();
    this.loading = true;
    
    this.http.get('http://localhost:8080/', { responseType: 'text' })
      .subscribe({
        next: (answer) => {
          this.message = answer;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Could not connect to SpringBoot. Is it running on port 8080?';
          this.loading = false;
        }
      });
  }

  getHello() {
    this.clearStatus();
    this.loading = true;
    
    this.http.get('http://localhost:8080/hello', { responseType: 'text' })
      .subscribe({
        next: (answer) => {
          this.message = answer;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'No se pudo conectar con Spring Boot. ¿Está ejecutándose en puerto 8080?';
          this.loading = false;
        }
      });
  }

  private clearStatus() {
    this.message = '';
    this.error = '';
    this.loading = false;
  }

 getPersonalizedGreeting(){
    if (!this.username.trim()){
        this.error = "Please, write your name first!";
        return;
    }

    this.clearStatus();
    this.loading = true;

    this.http.get(`http://localhost:8080/hello/${this.username}`, {responseType: "text"}).subscribe({
        next: (answer) => {
            this.message = answer;
            this.loading = false;
        },
        error: (error) => {
        this.error = 'Could not get personalized greeting';
        this.loading = false;
      }
    });
  }
}