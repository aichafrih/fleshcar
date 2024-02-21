import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
showSuccessMessage(arg0: string) {
throw new Error('Method not implemented.');
}
  userId: number | null = null;
  private sub!: Subscription;
  user: User | null = null;
  error: string | null = null; // Ajoutez une variable pour stocker les erreurs
  showModal = false;
  AuthServiceService: any;
  errorMessage: string | undefined;
updateAccountDto: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthServiceService,
    private userService: UserService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.userId = parseInt(params['userId']);
      const token = localStorage.getItem('token'); // Récupérer le token JWT depuis le stockage local
      if (token) {
        const headers = new HttpHeaders({
          'Authorization': 'Bearer ' + token
        });
        
        this.http.get('http://localhost:3000/user/' + this.userId, { headers }).pipe(
          catchError((error) => {
            if (error.status === 401) {
              // Redirigez vers la page de connexion si non authentifié
              this.router.navigate(['/connexion']);
            }
            return throwError(error); // Propagez l'erreur après traitement
          })
        ).subscribe(
          (user: any) => {
            this.user = user;
          },
          error => {
            this.error = error.message; // Stockez le message d'erreur
            console.error('Erreur lors de la récupération des informations utilisateur:', error);
          }
        );
      } else {
        console.error('Aucun token JWT trouvé.');
        // Gérer l'absence de token, par exemple rediriger vers la page de connexion
      }
    });

  
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  
  currentPopup: string | null = null;

  // Fonction pour ouvrir un popup spécifique
  openModal(popupId: string) {
    this.currentPopup = popupId;
  }

  // Fonction pour fermer le popup actuellement ouvert
  closeModal() {
    this.currentPopup = null;
  }
  

  // déconnexion
  logout(): void {
    this.authService.logout(); // Appel à la méthode de déconnexion du service d'authentification
    this.router.navigate(['/home']); // Redirection vers la page d'accueil après la connexion
  }

}