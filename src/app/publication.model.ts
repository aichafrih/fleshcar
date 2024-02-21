import { User } from './user.model';
//import { Media } from './media.model';

export interface Publication {
  pubid: number;
  marque: string;
  model: string;
  anneeFabrication: number;
  nombrePlace: number;
  couleur: string;
  kilometrage: number;
  prix: number;
  descrption?: string;
  typeCarburant: TypeCarburant;
  userId: number; // Foreign key referencing User
 user: User| null; // Define the relation to User
 // medias: Media[]; // Define the relation to Media
}

export enum TypeCarburant {
  Essence = 'Essence',
  Diesel = 'Diesel',
  GPL = 'GPL',
  Electrique = 'Electrique'
}
