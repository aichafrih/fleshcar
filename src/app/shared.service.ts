import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/';
  data: any[]=[];

  inscription(data: any){
    return this.http.post(this.url + 'auth/inscription', data);
  }
  connexion(data: any){
    return this.http.post(this.url + 'auth/connexion', data);
  }
  
  AjouterPublication(data: any){
    return this.http.post(this.url + 'pubs/create', data);
}

 // login(loginForm: loginForm){
 //   return this.http.post<any>('/api/auth/connexion',{email:loginForm.email,MotDePasse:loginForm.MotDePasse}).pipe(
    //  map((token) => { console.log('token'); localStorage.setItem('blog-token',token.access_token); return token; }) )}}

}
