import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoriteProgrammingLanguage } from './models/favorite-programming-language';
import { UserService } from './services/user.service';
import { GreetingService } from './services/greeting.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  personalizedName: string = '';
  name: string = '';
  email: string = '';
  age: number | null = null;
  favoriteProgrammingLanguage: string = '';
  favoriteProgrammingLanguages = Object.keys(FavoriteProgrammingLanguage).filter(
    (key) => isNaN(+key)
  ) as string[];
  message: string = '';
  loading: boolean = false;
  error: string = '';
  selectedUserId: number | null = null;
  retrievedUser: User | null = null;

  constructor(
    private userService: UserService,
    private greetingService: GreetingService
  ) {}

  private handleError(err: any, defaultMessage: string) {
    const errorMessage =
      err.error && typeof err.error === 'object'
        ? Object.entries(err.error).map(([field, message]) => `${field}: ${message}`).join('; ')
        : err.error?.message || err.error?.error || JSON.stringify(err.error) || defaultMessage;
    this.error = errorMessage;
    this.loading = false;
  }

  getWelcomeMessage() {
    this.loading = true;
    this.error = '';
    this.message = '';

    this.greetingService.getWelcomeMessage().subscribe({
      next: (response: string) => {
        this.message = response;
        this.loading = false;
      },
      error: (err) => this.handleError(err, 'Could not connect to Spring Boot. Is it running on port 8080?'),
    });
  }

  getHelloMessage() {
    this.loading = true;
    this.error = '';
    this.message = '';

    this.greetingService.getHelloMessage().subscribe({
      next: (response: string) => {
        this.message = response;
        this.loading = false;
      },
      error: (err) => this.handleError(err, 'Could not connect to Spring Boot. Is it running on port 8080?'),
    });
  }

  getPersonalizedGreeting() {
    if (!this.personalizedName.trim()) {
      this.error = 'Please enter your name.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.message = '';

    this.greetingService.getPersonalizedGreeting(this.personalizedName).subscribe({
      next: (response: string) => {
        this.message = response;
        this.loading = false;
      },
      error: (err) => this.handleError(err, 'Could not retrieve personalized greeting.'),
    });
  }

  getTestUser() {
    this.loading = true;
    this.error = '';
    this.message = '';

    this.userService.getTestUser().subscribe({
      next: (response: User) => {
        this.message = `Name: ${response.name}, Email: ${response.email}, Age: ${response.age}, Favorite Language: ${response.favoriteProgrammingLanguage}, Active: ${response.isActive}`;
        this.loading = false;
      },
      error: (err) => this.handleError(err, 'Could not retrieve test user.'),
    });
  }

  signupUser() {
    if (!this.name || !this.email || this.age === null || !this.favoriteProgrammingLanguage) {
      this.error = 'Please fill in all fields.';
      return;
    }

    const isValidLanguage = Object.values(FavoriteProgrammingLanguage).includes(
      this.favoriteProgrammingLanguage as unknown as FavoriteProgrammingLanguage
    );
    if (!isValidLanguage) {
      this.error = 'Please select a valid programming language.';
      return;
    }

    const user: User = {
      name: this.name,
      email: this.email,
      age: this.age,
      favoriteProgrammingLanguage: this.favoriteProgrammingLanguage as unknown as FavoriteProgrammingLanguage,
      isActive: true,
    };

    this.loading = true;
    this.error = '';
    this.message = '';

    this.userService.signupUser(user).subscribe({
      next: (response) => {
        this.loading = false;
        this.message = response;
        this.name = '';
        this.email = '';
        this.age = null;
        this.favoriteProgrammingLanguage = '';
      },
      error: (err) => this.handleError(err, 'Failed to register user'),
    });
  }

  getUserById() {
    if (this.selectedUserId === null) {
      this.error = 'Por favor, selecciona un ID de usuario.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.retrievedUser = null;

    this.userService.getUserById(this.selectedUserId).subscribe({
      next: (user: User) => {
        this.loading = false;
        this.retrievedUser = user;
        this.message = `Usuario encontrado: ${user.name}`;
      },
      error: (err) => this.handleError(err, err.status === 404 ? 'Usuario no encontrado' : 'Error del servidor'),
    });
  }
}