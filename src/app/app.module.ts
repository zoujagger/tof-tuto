import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';

// add tuto module step by step
// NgModel lives here them import in imports part
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,   // Add HeroDetailComponent
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
