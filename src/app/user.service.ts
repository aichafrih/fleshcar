import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './user.model';
import { catchError, map } from 'rxjs/operators'; // Importez l'opérateur map depuis 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserIdFromToken(): any {
    throw new Error('Method not implemented.');
  }
  router: any;

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') // Assurez-vous d'avoir un système d'authentification et stockez le token dans le localStorage
    })
  };



  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.url + 'user/' + id);
  }


  updateAccount(userData: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.put<any>(this.url+'user/update-account', userData, { headers: { Authorization: `Bearer ${token}` } });
  }


  deleteAccount(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.delete<any>(this.url+'user/delete-account', { headers: { Authorization: `Bearer ${token}` } });
  }


}