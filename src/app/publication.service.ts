
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from './publication.model';


@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  addPublication(publication: Publication, headers: HttpHeaders): Observable<Publication> {
    return this.http.post<Publication>(this.url + 'pubs/create', publication, { headers });
  }
}
