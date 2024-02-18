import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { map } from 'rxjs/operators'; // Importez l'opérateur map depuis 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/';
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.url+'user/' + id).pipe(
      map((user:User)=> user)
    )
  }
}
