import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressenComponent } from './adressen/adressen.component';
import { HomeComponent } from './home/home.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
