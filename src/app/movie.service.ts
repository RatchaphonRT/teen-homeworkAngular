import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Imovie } from './imovie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

   private apiUrl = 'https://638492184ce192ac605bc39a.mockapi.io/Movie';

  constructor(private http: HttpClient) { }

  getDatabyId(id: string): Observable<Imovie> {
    return this.http.get<Imovie>(`${this.apiUrl}/${id}`);
  }
}
