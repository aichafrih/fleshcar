import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delate-account',
  templateUrl: './delate-account.component.html',
  styleUrls: ['./delate-account.component.scss']
})
export class DelateAccountComponent implements OnInit {



  ngOnInit(): void {
  }

  constructor(private userService: UserService,private router: Router) {}

  deleteAccount(): void {
    this.userService.deleteAccount().subscribe(
      () => {
        console.log('Compte supprimé avec succès.');
        // Rediriger vers la page d'accueil après la suppression du compte
        this.router.navigate(['/home']);
        
      },
      error => {
        console.error('Erreur lors de la suppression du compte :', error);
        // Afficher un message d'erreur à l'utilisateur
      }
    );
  }





}
