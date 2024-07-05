import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { QuoteService } from './quote.service';

@NgModule({
    declarations: [
        AppComponent,
        QuoteDisplayComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    providers: [QuoteService],
    bootstrap: [AppComponent]
})
export class AppModule { }
