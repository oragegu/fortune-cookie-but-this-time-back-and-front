import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, QuoteDisplayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('void', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate('2s ease-out', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('2s', style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class AppComponent {
  isDark = false;
  animationState = 'entered';
  // Boolean flag to track whether the component is shown or hidden
  show = false;

  // Getter method to determine the current state ('show' or 'hide') based on the 'show' flag
  get presentState() {
    return this.show ? 'show' : 'hide';
  }

}
