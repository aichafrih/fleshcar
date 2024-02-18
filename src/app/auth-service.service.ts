import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  login() {
    throw new Error('Method not implemented.');
  }
  private readonly TOKEN_KEY = 'auth_token'; // Clé pour stocker le token dans le stockage local

  constructor() { }

  // Méthode pour stocker le token dans le stockage local
  storeToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Méthode pour récupérer le token du stockage local
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Méthode pour supprimer le token du stockage local (déconnexion de l'utilisateur)
  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Méthode pour vérifier si l'utilisateur est connecté (s'il a un token)
  isLoggedIn(): boolean {
    return !!this.getToken(); // Renvoie true si un token est présent, sinon false
  }
}
