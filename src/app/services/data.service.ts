import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('https://world.openfoodfacts.org/cgi/search.pl?search_terms=snacks&search_simple=1&action=process&json=1');
  }
  
  
}
