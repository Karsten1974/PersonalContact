import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrancheComponent } from './pages/branche-bearbeiten/branche.component';
import { BrancheBearbeitenComponent } from './pages/branche-bearbeiten/components/branche-bearbeiten/branche-bearbeiten.component';
import { BrancheListeComponent } from './pages/branche-bearbeiten/components/branche-liste/branche-liste.component';
import { ContactVerwaltenComponent } from './pages/contact-verwalten/contact-verwalten.component';
import { ContactDialogNeuComponent } from './pages/contact-verwalten/components/contact-dialog-neu/contact-dialog-neu.component';
import { ContactDialogAdresseComponent } from './pages/contact-verwalten/components/contact-dialog-adresse/contact-dialog-adresse.component';
import { ContactListComponent } from './pages/contact-verwalten/components/contact-list/contact-list.component';
import { ContactBearbeitenComponent } from './pages/contact-bearbeiten/contact-bearbeiten.component';
import { ContactPersonComponent } from './pages/contact-bearbeiten/components/contact-person/contact-person.component';
import { ContactVerbindungenComponent } from './pages/contact-bearbeiten/components/contact-verbindungen/contact-verbindungen.component';
import { ContactZusatzComponent } from './pages/contact-bearbeiten/components/contact-zusatz/contact-zusatz.component';

@NgModule({
  declarations: [
    AppComponent,
    BrancheComponent,
    BrancheBearbeitenComponent,
    BrancheListeComponent,
    ContactVerwaltenComponent,
    ContactDialogNeuComponent,
    ContactDialogAdresseComponent,
    ContactListComponent,
    ContactBearbeitenComponent,
    ContactPersonComponent,
    ContactVerbindungenComponent,
    ContactZusatzComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, //adresse-dialog-neu benötigt FormsModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
