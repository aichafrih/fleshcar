import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { SharedService } from '../shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    private router: Router,
    private formBuilder: FormBuilder, private http: HttpClient) {
      this.createForm();
    }
  

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
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }




  forgotPasswordForm!: FormGroup;
  resetPasswordForm!: FormGroup;
  verificationCodeSent: boolean = false;
  newPasswordSet: boolean = false;


  createForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required]
    });

    this.resetPasswordForm = this.formBuilder.group({
      code: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  sendVerificationCode() {
    const email = this.forgotPasswordForm.value.email;
    if (email) {
      this.http.post<any>('http://localhost:3000/auth/reset-pwd-demand', { email }).subscribe(response => {
        if (response.success) {
          this.verificationCodeSent = true;
        }
      });
    }
  }

  resetPassword() {
    const code = this.resetPasswordForm.value.code;
    const newPassword = this.resetPasswordForm.value.newPassword;
    if (code && newPassword) {
      // Assurez-vous d'avoir récupéré le token d'authentification
      const token = 'votre_token';
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      this.http.post<any>('http://localhost:3000/auth/reset-pwd-confirmation', { code, newPassword }, { headers }).subscribe(response => {
        if (response.success) {
          this.newPasswordSet = true;
        }
      });
    }
  }
}
