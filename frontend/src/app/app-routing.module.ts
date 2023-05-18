import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrancheComponent } from './pages/branche-bearbeiten/branche.component';
import {ContactVerwaltenComponent} from "./pages/contact-verwalten/contact-verwalten.component";
import {ContactBearbeitenComponent} from "./pages/contact-bearbeiten/contact-bearbeiten.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'home',
    component: ContactVerwaltenComponent
  },{
    path: 'verwalten',
    component: ContactVerwaltenComponent
  },{
    path: 'bearbeiten',
    component: ContactBearbeitenComponent
  },{
    path: 'bearbeiten/:contactUUID',
    component: ContactBearbeitenComponent
  },{
    path: 'branchen',
    component: BrancheComponent
  },{
    path: 'branche/:brancheUUID',
    component: BrancheComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
