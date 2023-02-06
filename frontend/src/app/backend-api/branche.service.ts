import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../shared/data';

@Injectable({
  providedIn: 'root'
})
export class BrancheService {
  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getBranchen(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(`${this.api}/branchen`);
  }

  getBranche(brancheUUI: string): Observable<ListItem> {
    return this.http.get<ListItem>(`${this.api}/branche/${brancheUUI}`);
  }

  createBranche(branche: ListItem): Observable<ListItem> {
    return this.http.post<ListItem>(`${this.api}/branche`, branche);
  }

  updateBranche(branche: ListItem): Observable<any> {
    return this.http.put(`${this.api}/branche`, branche, {responseType: 'text'});
  }

  deleteBranche(brancheUUI: string): Observable<any> {
    return this.http.delete(`${this.api}/branche/${brancheUUI}`, {responseType: 'text'});
  }

}
