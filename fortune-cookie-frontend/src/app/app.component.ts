import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuoteDisplayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('quoteState', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(100vh)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden <=> visible', animate('600ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  sectionState = 'hidden';

  scrollToQuote() {
    this.sectionState = 'visible';
    setTimeout(() => {
      document.getElementById('quoteSection')?.scrollIntoView({ behavior: 'smooth' });
    }, 600); // Delay to ensure smooth animation before scrolling
  }
}
