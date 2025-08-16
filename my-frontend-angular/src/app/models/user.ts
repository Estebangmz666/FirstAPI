import { FavoriteProgrammingLanguage } from './favorite-programming-language';

export interface User {
  name: string;
  email: string;
  age: number;
  favoriteProgrammingLanguage: FavoriteProgrammingLanguage;
  isActive: boolean;
}