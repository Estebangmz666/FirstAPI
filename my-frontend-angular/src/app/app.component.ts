import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoriteProgrammingLanguage } from './FavoriteProgramingLanguage';
import { Api } from './api';

interface User {
  name: string;
  email: string;
  age: number;
  favoriteProgrammingLanguage: FavoriteProgrammingLanguage;
  isActive: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  username: string = '';
  name: string = '';
  email: string = '';
  age: number | null = null;
  favoriteProgrammingLanguage: string = '';
  favoriteProgrammingLanguages = Object.values(FavoriteProgrammingLanguage);
  message: string = '';
  loading: boolean = false;
  error: string = '';

  constructor(private api: Api) {}

  getGreeting() {
    this.loading = true;
    this.error = '';
    this.message = '';

    this.api.getGreeting().subscribe({
      next: (response: string) => {
        this.message = response;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Could not connect to Spring Boot. Is it running on port 8080?';
        this.loading = false;
      }
    });
  }

  getHello() {
    this.loading = true;
    this.error = '';
    this.message = '';

    this.api.getHello().subscribe({
      next: (response: string) => {
        this.message = response;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Could not connect to Spring Boot. Is it running on port 8080?';
        this.loading = false;
      }
    });
  }

  getPersonalizedGreeting() {
    if (!this.username.trim()) {
      this.error = 'Please enter your name.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.message = '';

    this.api.getPersonalizedGreeting(this.username).subscribe({
      next: (response: string) => {
        this.message = response;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Could not retrieve personalized greeting.';
        this.loading = false;
      }
    });
  }

  getTestUser() {
    this.loading = true;
    this.error = '';
    this.message = '';

    this.api.getTestUser().subscribe({
      next: (response: User) => {
        this.message = `Name: ${response.name}, Email: ${response.email}, Age: ${response.age}, Favorite Language: ${response.favoriteProgrammingLanguage}, Active: ${response.isActive}`;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Could not retrieve test user.';
        this.loading = false;
      }
    });
  }

  signupUser() {
    if (!this.name || !this.email || this.age === null || !this.favoriteProgrammingLanguage) {
      this.error = 'Please fill in all fields.';
      return;
    }

    const isValidLanguage = (value: string): boolean => {
      return Object.values(FavoriteProgrammingLanguage).includes(value as unknown as FavoriteProgrammingLanguage);
    };

    if (!isValidLanguage(this.favoriteProgrammingLanguage)) {
      this.error = 'Please select a valid programming language.';
      return;
    }

    const user: User = {
      name: this.name,
      email: this.email,
      age: this.age,
      favoriteProgrammingLanguage: this.favoriteProgrammingLanguage as unknown as FavoriteProgrammingLanguage,
      isActive: true
    };

    this.loading = true;
    this.error = '';
    this.message = '';

    this.api.signupUser(user).subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.loading = false;
        this.message = response;
        this.name = '';
        this.email = '';
        this.age = null;
        this.favoriteProgrammingLanguage = '';
      },
      error: (err) => {
        console.error('API Error:', err);
        this.loading = false;
        const errorMessage = err.error && typeof err.error === 'object'
                ? Object.entries(err.error).map(([field, message]) => `${field}: ${message}`).join('; ')
                : err.error?.message || err.error?.error || JSON.stringify(err.error) || 'Server error';
        this.error = `Failed to register user: ${err.error || 'Server error'}`;
      }
    });
  }
}