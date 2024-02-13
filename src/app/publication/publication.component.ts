import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  
  constructor(private _shared: SharedService) { }

  ngOnInit(): void {
  }

  data = {
    marque: '',           
    model: '',              
    anneeFabrication: '',          
    nombrePlace: '',                
    couleur: '',                
    kilometrage: '',              
    prix: '',            
    descrption: '',          
    typeCarburant: ''  
  }

async AjouterPublication(){
  try {
    const res = await this._shared.AjouterPublication(this.data)
    .toPromise();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

}
