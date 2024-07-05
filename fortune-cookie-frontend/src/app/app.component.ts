import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuoteDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('scrollAnimation', [
      state('hidden', style({
        transform: 'translateY(100vh)',
      })),
      state('visible', style({
        transform: 'translateY(0)',
      })),
      transition('hidden <=> visible', animate('1000ms ease-out')),
    ]),
  ]
})
export class AppComponent {
  sectionState = 'hidden';

  scrollToQuote() {
    this.sectionState = 'visible';
    setTimeout(() => {
      document.getElementById('quoteSection')?.scrollIntoView({ behavior: 'smooth' });
    }, 1000); // Delay to ensure smooth animation before scrolling
  }
}