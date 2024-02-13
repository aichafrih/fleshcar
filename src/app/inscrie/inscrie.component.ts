import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-inscrie',
  templateUrl: './inscrie.component.html',
  styleUrls: ['./inscrie.component.scss']
})
export class InscrieComponent implements OnInit{

 data = { 
  Nom: '',
  Prenom: '',
  email:  '',
  NumTel: '',
  Adresse:'',
  MotDePasse: '',
  Ville: '',
  CodePostal:''
} 

async Inscription() {
  try {
    const res = await this._shared.inscription(this.data)
    .toPromise();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

  constructor(private _shared: SharedService) {}
  ngOnInit():void {}

}