import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = '/api/quotes';

  constructor(private http: HttpClient) { }

  getQuote(): Observable<{ quote: string }> {
    return this.http.get<{ quote: string }>(this.apiUrl);
  }
}
