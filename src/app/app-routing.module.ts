import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampionatiComponent } from './pages/campionati/campionati.component';
import { HomeComponent } from './pages/home/home.component';
import { CalendariComponent } from './pages/calendari/calendari.component';

const routes: Routes = [
  {path:"campionati",component:CampionatiComponent},
  {path:"calendari",component:CalendariComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
