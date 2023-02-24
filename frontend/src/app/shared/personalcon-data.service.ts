import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdresseData, ListItem, ContactData, VerbindungsData } from './data';

@Injectable({
  providedIn: 'root'
})
export class PersonalconDataService {
  private basePath = '/api';

  bVirtDS = true;

  constructor(private http: HttpClient) {}

  getBranchen(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(`${this.basePath}/branche`);
  }

  getVerbindungsdatenArten(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(`${this.basePath}/verbindungsart`);
  }

  getAdressen(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(`${this.basePath}/adresse/adressenbezeichnungen`);
  }

  getAdresse(adrUUID: string): Observable<AdresseData> {
    return this.http.get<AdresseData>(`${this.basePath}/adresse/${adrUUID}`);
  }

  createAdresse(adresse: AdresseData): Observable<AdresseData> {
    return this.http.post<AdresseData>(`${this.basePath}/adresse`, adresse);
  }

  updateAdresse(adresse: AdresseData): Observable<any> {
    return this.http.put(`${this.basePath}/adresse`, adresse, {responseType: 'text'});
  }

  getContacts(): Observable<ContactData[]> {
    return this.http.get<ContactData[]>(`${this.basePath}/contact`);
  }

  createContact(contact: ContactData): Observable<ContactData> {
    return this.http.post<ContactData>(`${this.basePath}/contact`, contact);
  }

  updateContact(contact: ContactData): Observable<any> {
    console.log('updateContact');
    return this.http.put(`${this.basePath}/contact`, contact, {responseType: 'text'});
  }

  getContact(contactUUID: string): Observable<ContactData> {
    return this.http.get<ContactData>(`${this.basePath}/contact/${contactUUID}`);
  }

  getVerbindungsdaten(contactUUID: string): Observable<VerbindungsData[]> {
    return this.http.get<VerbindungsData[]>(`${this.basePath}/verbindung`);
  }
}
