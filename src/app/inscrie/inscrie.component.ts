import { Component,ViewChild, ElementRef,  OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-inscrie',
  templateUrl: './inscrie.component.html',
  styleUrls: ['./inscrie.component.scss']
})
export class InscrieComponent implements OnInit {
  showModal = false;
  confirmPassword: string = '';
  connectedUser: any;
  selectedFile: File | undefined;

  // Fonction pour ouvrir la fenêtre modale
  openModal() {
    this.showModal = true;
  }

  // Fonction pour fermer la fenêtre modale
  closeModal() {
    this.showModal = false;
  }


  data = {
    Nom: '',
    Prenom: '',
    email: '',
    NumTel: '',
    Adresse: '',
    MotDePasse: '',

    Ville: '',
    CodePostal: '',
    photoProfil:''
    
  };


  async Inscription() {

    try {
      // Ajoutez des validations avant de soumettre les données
      if (!this.validateEmail(this.data.email)) {
        console.log("L'adresse e-mail est invalide");
        return;
      }
      if (!this.validateNumTel(this.data.NumTel)) {
        console.log("Le numéro de téléphone est invalide");
        return;
      }
      if (!this.validateCodePostal(this.data.CodePostal)) {
        console.log("Le code postal est invalide");
        return;
      }
      if (!this.validateMotDePasse(this.data.MotDePasse)) {
        alert("Le mot de passe est invalide");
        return;
      }
      if (!this.validateConfirmationMotDePasse()) {
        console.error('La confirmation du mot de passe ne correspond pas.');
        alert('La confirmation du mot de passe ne correspond pas.');
        return;
      }
  



      const res = await this._shared.inscription(this.data).toPromise();
      console.log(res);
      this.openModal();
    } catch (err) {
      console.log(err);
    }
  }

  validateConfirmationMotDePasse(): boolean {
    return this.data.MotDePasse === this.confirmPassword;
  }
  // Valider l'email
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Valider le numéro de téléphone (doit être exactement 8 chiffres)
  validateNumTel(numTel: string): boolean {
    return /^\d{8}$/.test(numTel);
  }

  // Valider le code postal (doit être exactement 4 chiffres)
  validateCodePostal(codePostal: string): boolean {
    return /^\d{4}$/.test(codePostal);
  }

  // Valider le mot de passe (au moins une lettre majuscule, une lettre minuscule et un chiffre)
  validateMotDePasse(motDePasse: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(motDePasse);
  }

  constructor(private _shared: SharedService) { }
  ngOnInit(): void { }



  //ajouter photo de profil
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log("file selected");}

    onUpload() {
      console.log('Selected file:', this.selectedFile); // Vérifiez si this.selectedFile contient une valeur
      if (this.selectedFile) {
        this._shared.uploadProfileImage(this.selectedFile).subscribe(
          (response) => {
            console.log('Image uploaded successfully:', response);
            // Effectuez des actions supplémentaires après le téléchargement de la photo de profil si nécessaire
          },
          (error) => {
            console.error('Error uploading image:', error);
          }
        );
      } else {
        console.error('No file selected.'); // Affichez un message d'erreur si aucun fichier n'a été sélectionné
      }
    }
  }
