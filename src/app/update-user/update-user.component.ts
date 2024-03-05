import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators'; // Importez l'opérateur map

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  @Output() modifierTermine: EventEmitter<void> = new EventEmitter<void>();
  userId: number | null = null;
  private sub!: Subscription;
  user: User | null = null;
  error: string | null = null;
  updateUserForm: FormGroup;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient
  ) {


    this.updateUserForm = this.fb.group({
      Nom: [''],
      Prenom: [''],
      NumTel: [''],
      Adresse: [''],
      Ville: [''],
      CodePostal: [''],
      email: [''],
      MotDePasse: ['']
    });
  }



  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.userId = parseInt(params['userId']);
      const token = localStorage.getItem('token');
      if (token) {
        const headers = new HttpHeaders({
          'Authorization': 'Bearer ' + token
        });
        // Récupération des informations de l'utilisateur et pré-remplissage du formulaire
        this.http.get<User>('http://localhost:3000/user/' + this.userId, { headers }).pipe(
          map((user: User) => { // Utilisez l'opérateur map pour transformer la réponse HTTP
            this.user = user;
            this.updateUserForm.patchValue({
              Nom: user.Nom,
              Prenom: user.Prenom,
              NumTel: user.NumTel,
              Adresse: user.Adresse,
              Ville: user.Ville,
              CodePostal: user.CodePostal,
              email: user.email,
              MotDePasse: user.MotDePasse
            });
          })
        ).subscribe(
          () => {},
          error => {
            this.error = error.message;
            console.error('Erreur lors de la récupération des informations utilisateur:', error);
          }
        );
      }
    });
  }
  
  updateAccount(): void {
    this.userService.updateAccount(this.updateUserForm.value).subscribe(
      () => {
        console.log('Compte mis à jour avec succès.');
        this.modifierTermine.emit();},
      error => {
        console.error('Erreur lors de la mise à jour du compte :', error);
      });}
}
