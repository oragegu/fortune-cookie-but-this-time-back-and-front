import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quote } from './interfaces/quote.interface';
import quotesData from '../assets/quotes.json'

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quotes: Quote[] = quotesData;

  getQuotes(): Quote[] {
    return this.quotes;
  }
}