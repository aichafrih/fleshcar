import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

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

  uploadProfileImage(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<any>(this.url + 'user/upload', formData);
  }
 

  connexion(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.url + 'auth/connexion', { email, MotDePasse: password });
  }


  AjouterPublication(data: any){
    return this.http.post(this.url + 'pubs/create', data);
}
requestPasswordReset(email: string): Observable<any> {
  return this.http.post<any>(this.url +'auth/reset-pass', { email });
}

confirmPasswordReset(data: any): Observable<any> {
  return this.http.post<any>(this.url + 'auth/reset-pass-confirmation', data);
}



}
