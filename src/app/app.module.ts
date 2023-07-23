import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CampionatiComponent } from './pages/campionati/campionati.component';
import { HomeComponent } from './pages/home/home.component';
import { CalendariComponent } from './pages/calendari/calendari.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CampionatiComponent,
    HomeComponent,
    CalendariComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
