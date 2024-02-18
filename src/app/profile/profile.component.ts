import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  userId: number | null = null;
  private sub!: Subscription;
  user: User | null = null;
  error: string | null = null; // Ajoutez une variable pour stocker les erreurs

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private http: HttpClient) { }

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
}
