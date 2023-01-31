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
    AdresseDialogNeuComponent
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
