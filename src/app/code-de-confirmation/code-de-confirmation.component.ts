import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-code-de-confirmation',
  templateUrl: './code-de-confirmation.component.html',
  styleUrls: ['./code-de-confirmation.component.scss']
})
export class CodeDeConfirmationComponent implements OnInit {

  confirmForm: FormGroup;
  showResetPasswordPopup: boolean = false;
  
  constructor(private fb: FormBuilder, private authService: SharedService) {
    this.confirmForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Form submitted!"); // Ajout de la console.log() pour vérifier si la méthode est appelée
    if (this.confirmForm.valid) {
      const data = this.confirmForm.value;
      this.authService.confirmPasswordReset(data).subscribe(
        response => {
          if (response && response.data === "Mot De Passe updated") {
            this.showResetPasswordPopup = true; // Afficher la popup pour modifier le mot de passe
          } else {
            console.log("Une erreur s'est produite :", response);
          }
        },
        error => {
          console.error("Une erreur s'est produite :", error);
        }
      );
    }
  }}