
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
import { ContactListComponent } from './pages/contact-verwalten/components/contact-list/contact-list.component';
import { ContactBearbeitenComponent } from './pages/contact-bearbeiten/contact-bearbeiten.component';
import { ContactPersonComponent } from './pages/contact-bearbeiten/components/contact-person/contact-person.component';
import { ContactVerbindungenComponent } from './pages/contact-bearbeiten/components/contact-verbindungen/contact-verbindungen.component';
import { ContactZusatzComponent } from './pages/contact-bearbeiten/components/contact-zusatz/contact-zusatz.component';
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {ListboxModule} from "primeng/listbox";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {AppLayoutModule} from "./layout/app.layout.module";
import { ContactAnlegenComponent } from './pages/contact-anlegen/contact-anlegen.component';
import {PanelModule} from "primeng/panel";
import {RadioButtonModule} from "primeng/radiobutton";
import {DataViewModule} from "primeng/dataview";
import {InputNumberModule} from "primeng/inputnumber";
import { PlzValidatorDirective } from './shared/validator/plz-validator.directive';
import {InputTextareaModule} from "primeng/inputtextarea";
import {CalendarModule} from "primeng/calendar";
import { InputTextComponent } from './shared/components/input-text/input-text.component';
import { InputNumberComponent } from './shared/components/input-number/input-number.component';
import { GridColumnComponent } from './shared/components/grid-column/grid-column.component';
import { GridCardComponent } from './shared/components/grid-card/grid-card.component';
import { InputPlzComponent } from './shared/components/input-plz/input-plz.component';

@NgModule({
  declarations: [
    AppComponent,
    BrancheComponent,
    BrancheBearbeitenComponent,
    BrancheListeComponent,
    ContactVerwaltenComponent,
    ContactListComponent,
    ContactBearbeitenComponent,
    ContactPersonComponent,
    ContactVerbindungenComponent,
    ContactZusatzComponent,
    ContactAnlegenComponent,
    PlzValidatorDirective,
    InputTextComponent,
    InputNumberComponent,
    GridColumnComponent,
    GridCardComponent,
    InputPlzComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    FormsModule, //adresse-dialog-neu benötigt FormsModule
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    ListboxModule,
    ButtonModule,
    DropdownModule,
    PanelModule,
    RadioButtonModule,
    DataViewModule,
    InputNumberModule,
    InputTextareaModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
