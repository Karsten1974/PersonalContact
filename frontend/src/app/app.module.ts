import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdressePersonComponent } from './adressen/adresse-person/adresse-person.component';
import { AdresseTodeslisteComponent } from './adressen/adresse-todesliste/adresse-todesliste.component';
import { AdressenComponent } from './adressen/adressen.component';
import { AdressePersonZusatzComponent } from './adressen/adresse-person-zusatz/adresse-person-zusatz.component';
import { AdresseAdressenComponent } from './adressen/adresse-adressen/adresse-adressen.component';
import { AdresseVerbindungsdatenComponent } from './adressen/adresse-verbindungsdaten/adresse-verbindungsdaten.component';
import { AdresseBeziehungenComponent } from './adressen/adresse-beziehungen/adresse-beziehungen.component';
import { AdresseSuchenComponent } from './adressen/adresse-suchen/adresse-suchen.component';
import { AdresseDialogNeuComponent } from './adressen/adresse-dialog-neu/adresse-dialog-neu.component';
import { BrancheComponent } from './pages/branche-bearbeiten/branche.component';
import { BrancheBearbeitenComponent } from './pages/branche-bearbeiten/components/branche-bearbeiten/branche-bearbeiten.component';
import { BrancheListeComponent } from './pages/branche-bearbeiten/components/branche-liste/branche-liste.component';
import { VerbindungsartBearbeitenComponent } from './pages/verbindungsart-bearbeiten/components/verbindungsart-bearbeiten/verbindungsart-bearbeiten.component';
import { VerbindungsartListeComponent } from './pages/verbindungsart-bearbeiten/components/verbindungsart-liste/verbindungsart-liste.component';
import { VerbindungsartComponent } from './pages/verbindungsart-bearbeiten/verbindungsart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdressePersonComponent,
    AdresseTodeslisteComponent,
    AdressenComponent,
    AdressePersonZusatzComponent,
    AdresseAdressenComponent,
    AdresseVerbindungsdatenComponent,
    AdresseBeziehungenComponent,
    AdresseSuchenComponent,
    AdresseDialogNeuComponent,
    BrancheComponent,
    BrancheBearbeitenComponent,
    BrancheListeComponent,
    VerbindungsartBearbeitenComponent,
    VerbindungsartListeComponent,
    VerbindungsartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, //adresse-dialog-neu ben??tigt FormsModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
