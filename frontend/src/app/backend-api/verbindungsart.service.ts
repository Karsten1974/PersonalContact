import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../shared/data';

@Injectable({
  providedIn: 'root'
})
export class VerbindungsartService {
  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getVerbindungsarten(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(`${this.api}/verbindungsarten`);
  }

  getVerbindungsart(verbindungsartUUI: string): Observable<ListItem> {
    return this.http.get<ListItem>(`${this.api}/verbindungsart/${verbindungsartUUI}`);
  }

  createVerbindungsart(verbindungsart: ListItem): Observable<ListItem> {
    return this.http.post<ListItem>(`${this.api}/verbindungsart`, verbindungsart);
  }

  updateVerbindungsart(verbindungsart: ListItem): Observable<any> {
    return this.http.put(`${this.api}/verbindungsart`, verbindungsart, {responseType: 'text'});
  }

  deleteVerbindungsart(verbindungsartUUI: string): Observable<any> {
    return this.http.delete(`${this.api}/verbindungsart/${verbindungsartUUI}`, {responseType: 'text'});
  }
}
