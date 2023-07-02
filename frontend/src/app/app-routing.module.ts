import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrancheComponent } from './pages/branche-bearbeiten/branche.component';
import {ContactVerwaltenComponent} from "./pages/contact-verwalten/contact-verwalten.component";
import {ContactBearbeitenComponent} from "./pages/contact-bearbeiten/contact-bearbeiten.component";
import {AppLayoutComponent} from "./layout/app.layout.component";
import {ContactAnlegenComponent} from "./pages/contact-anlegen/contact-anlegen.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'home',
    component: AppLayoutComponent,
    children:[
      { path: '', component: ContactVerwaltenComponent }
    ]
  },{
    path: 'verwalten',
    component: AppLayoutComponent,
    children:[
      { path: '', component: ContactVerwaltenComponent }
    ]
  },{
    path: 'verwalten/:contactUUID',
    component: AppLayoutComponent,
    children:[
      { path: '', component: ContactVerwaltenComponent }
    ]
  },{
    path: 'bearbeiten/:contactUUID',
    component: AppLayoutComponent,
    children:[
      { path: '', component: ContactBearbeitenComponent }
    ]
  },{
    path: 'branchen',
    component: AppLayoutComponent,
    children:[
      { path: '', component: BrancheComponent }
    ]
  },{
    path: 'branche/:brancheUUID',
    component: AppLayoutComponent,
    children:[
      { path: '', component: BrancheComponent }
    ]
  },{
    path: 'contact',
    component: AppLayoutComponent,
    children:[
      { path: '', component: ContactAnlegenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
