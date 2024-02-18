import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  email: string = '';
  MotDePasse: string = '';
  error = '';

  constructor(
    private _shared: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  connexion() {
    this._shared.connexion(this.email, this.MotDePasse).subscribe(
      response => {
        // Stocker le token JWT dans le stockage local ou dans un cookie
        localStorage.setItem('token', response.token);
  
        // Rediriger l'utilisateur vers la page de profil en utilisant le routeur Angular
        if (response.user && response.user.id) {
          this.router.navigate(['/profil', response.user.id]);
        } else {
          console.error('Identifiant de l\'utilisateur non défini dans la réponse du backend.');
          // Gérer l'erreur, par exemple afficher un message à l'utilisateur
        }
  
        console.log('Connexion réussie !', response);
        // Afficher la réponse complète du backend pour le débogage
        console.log('Réponse du backend :', response);
      },
      error => {
        console.error('Erreur lors de la connexion :', error);
        this.error = error.error.message || 'Une erreur s\'est produite lors de la connexion.';
      }
    );
  }
}
