import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressenComponent } from './adressen/adressen.component';
import { HomeComponent } from './home/home.component';
import { BrancheComponent } from './pages/branche-bearbeiten/branche.component';
import { VerbindungsartComponent } from './pages/verbindungsart-bearbeiten/verbindungsart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'adressen',
    component: AdressenComponent
  },
  {
    path: 'adressen/:contactUUID',
    component: AdressenComponent
  },
  {
    path: 'branchen',
    component: BrancheComponent
  },
  {
    path: 'branche/:brancheUUID',
    component: BrancheComponent
  },
  {
    path: 'verbindungsart',
    component: VerbindungsartComponent
  },
  {
    path: 'verbindungsart/:verbindungsartUUID',
    component: VerbindungsartComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
