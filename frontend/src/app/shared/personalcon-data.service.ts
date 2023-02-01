import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdresseData, ListItem, ContactData, VerbindungsData } from './data';
import { MemoryDataStorage } from './memory-data-storage';

@Injectable({
  providedIn: 'root'
})
export class PersonalconDataService {
  private api = 'http://localhost:8080';
  private dataStorage: MemoryDataStorage;

  bVirtDS = true;

  constructor(private http: HttpClient) {
    this.dataStorage = new MemoryDataStorage();
  }

  getBranchen(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(`${this.api}/branchen`);
  }

  getVerbindungsdatenArten(): Observable<ListItem[]> {
    return this.dataStorage.getVerbindungsdatenArten();
  }

  getAdressen(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(`${this.api}/adressenbezeichnungen`);
  }

  getAdresse(adrUUID: string): Observable<AdresseData> {
    return this.http.get<AdresseData>(`${this.api}/adresse/${adrUUID}`);
  }

  createAdresse(adresse: AdresseData): Observable<AdresseData> {
    return this.http.post<AdresseData>(`${this.api}/adresse`, adresse);
  }

  updateAdresse(adresse: AdresseData): Observable<any> {
    return this.http.put(`${this.api}/adresse`, adresse, {responseType: 'text'});
  }

  getContacts(): Observable<ContactData[]> {
    return this.http.get<ContactData[]>(`${this.api}/contacts`);
  }

  createContact(contact: ContactData): Observable<ContactData> {
    return this.http.post<ContactData>(`${this.api}/contact`, contact);
  }

  updateContact(contact: ContactData): Observable<any> {
    console.log('updateContact');
    return this.http.put(`${this.api}/contact`, contact, {responseType: 'text'});
  }

  getContact(contactUUID: string): Observable<ContactData> {
    return this.http.get<ContactData>(`${this.api}/contact/${contactUUID}`);
  }

  getAdressenFound(): Observable<ListItem[]> {
    return this.dataStorage.getAdressenFound();
  }

  getVerbindungsdaten(contactUUID: string): Observable<VerbindungsData[]> {
    return this.dataStorage.getVerbindungsdaten(contactUUID);
  }
}
