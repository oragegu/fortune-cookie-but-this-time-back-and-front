import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-display.component.html',
  styleUrl: './quote-display.component.scss'
})

export class QuoteDisplayComponent implements OnInit {
  currentQuote = '';

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.getQuote();
  }

  getQuote() {
    this.quoteService.getQuote().subscribe(response => {
      this.currentQuote = response.quote;
    });
  }

  newQuote() {
    this.getQuote();
  }
}