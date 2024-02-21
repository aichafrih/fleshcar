  import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
  import { UserService } from '../user.service';
  import { FormBuilder, FormGroup } from '@angular/forms';
  
  @Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.scss']
  })
  export class UpdateUserComponent implements OnInit {
    @Output() modifierTermine: EventEmitter<void> = new EventEmitter<void>();
    updateAccountDto: any = {};

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Initialisez ici les données du compte utilisateur
  }

  updateAccount(): void {
    this.userService.updateAccount(this.updateAccountDto).subscribe(
      () => {
        console.log('Compte mis à jour avec succès.');
        // Rediriger ou afficher un message de confirmation
        this.modifierTermine.emit();
      },
      error => {
        console.error('Erreur lors de la mise à jour du compte :', error);
        // Afficher un message d'erreur à l'utilisateur
      }
    );
    }
  }