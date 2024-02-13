import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {map} from'rxjs/operators';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  ngOnInit(): void {
  }


  data = { 
    email:  '',
    MotDePasse: ''
  } 
  
  async Connexion() {
    try {
      const res = await this._shared.connexion(this.data)
      .toPromise();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  
    constructor(private _shared: SharedService) {}

 // loginForm!: FormGroup;
 
  //constructor(private authService:SharedService,
  //  private router:Router ) { }
  //ngOnInit(): void {
    //this.loginForm = new FormGroup({
     // email: new FormControl(null,[
     //   Validators.required,
     //   Validators.email,
      //Validators.minLength(6)]),
     // password:new FormControl(null,[
      //  Validators.required,
      //  Validators.minLength(3)
     // ])})}
 // onsubmit(){
//    if (this.loginForm.invalid){
    //  return ;}
     // this.authService.login(this.loginForm.value).pipe(
    //  map(token => this.router.navigate(['acceuil']))).subscribe();}}

//!login(){
  //  this.authService.login().subscribe((res)=>{
  //    console.log("Connected");
   //   localStorage.setItem('token', res['jwt']);
   //   window.location.reload();
   //   },err=>{console.error(err)}) }}


    }
 