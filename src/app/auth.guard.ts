import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Vérifiez ici si l'utilisateur est authentifié en vérifiant la présence du token JWT
    const token = localStorage.getItem('token');
    if (token) {
      // L'utilisateur est authentifié, autorisez l'accès à la page de profil
      return true;
    } else {
      // L'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
      this.router.navigate(['/connexion']);
      return false;
    }
  }
}