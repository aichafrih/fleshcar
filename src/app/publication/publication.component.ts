import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Publication, TypeCarburant } from '../publication.model';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  @Output() ajoutTermine: EventEmitter<void> = new EventEmitter<void>();
  
  publication: Publication = {
    pubid: 0,
    marque: '',
    model: '',
    anneeFabrication: 0,
    nombrePlace: 0,
    couleur: '',
    kilometrage: 0,
    prix: 0,
    descrption: '',
    typeCarburant: TypeCarburant.Essence,
    userId: 0,
    user: null
  };
  // Déclarer la propriété typeCarburantOptions
  typeCarburantOptions: string[] = Object.values(TypeCarburant);


  constructor(private publicationService: PublicationService) { }

  ngOnInit( ): void {
    console.log(this.typeCarburantOptions);
  }

  ajouterPublication(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
      });

      this.publicationService.addPublication(this.publication, headers).subscribe({
        next: (result) => {
          console.log('Publication ajoutée avec succès :', result);
          // Réinitialiser le formulaire ou effectuer d'autres actions après l'ajout réussi
          this.publication = {
            pubid: 0,
            marque: '',
            model: '',
            anneeFabrication: 0,
            nombrePlace: 0,
            couleur: '',
            kilometrage: 0,
            prix: 0,
            descrption: '',
            typeCarburant: TypeCarburant.Essence,
            userId: 0,
            user: null
          };
          this.ajoutTermine.emit();
          
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de la publication :', error);
          // Gérer l'erreur, afficher un message à l'utilisateur, etc.
        }
      });
    } else {
      // Traitez le cas où le token n'est pas présent dans le stockage local
    }
  }
}
