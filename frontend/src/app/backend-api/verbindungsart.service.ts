import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../shared/data';

@Injectable({
  providedIn: 'root'
})
export class VerbindungsartService {
  private basePath = '/api';

  constructor(private http: HttpClient) { }

  getVerbindungsarten(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(`${this.basePath}/verbindungsart`);
  }

  getVerbindungsart(verbindungsartUUI: string): Observable<ListItem> {
    return this.http.get<ListItem>(`${this.basePath}/verbindungsart/${verbindungsartUUI}`);
  }

  createVerbindungsart(verbindungsart: ListItem): Observable<ListItem> {
    return this.http.post<ListItem>(`${this.basePath}/verbindungsart`, verbindungsart);
  }

  updateVerbindungsart(verbindungsart: ListItem): Observable<any> {
    return this.http.put(`${this.basePath}/verbindungsart`, verbindungsart, {responseType: 'text'});
  }

  deleteVerbindungsart(verbindungsartUUI: string): Observable<any> {
    return this.http.delete(`${this.basePath}/verbindungsart/${verbindungsartUUI}`, {responseType: 'text'});
  }
}
