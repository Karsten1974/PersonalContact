import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../shared/data';

@Injectable({
  providedIn: 'root'
})
export class BrancheService {
  private basePath = '/api';

  constructor(private http: HttpClient) { }

  getBranchen(): Observable<ListItem[]> {
    return this.http.get<ListItem[]>(`${this.basePath}/branche`);
  }

  getBranche(brancheUUI: string): Observable<ListItem> {
    return this.http.get<ListItem>(`${this.basePath}/branche/${brancheUUI}`);
  }

  createBranche(branche: ListItem): Observable<ListItem> {
    return this.http.post<ListItem>(`${this.basePath}/branche`, branche);
  }

  updateBranche(branche: ListItem): Observable<any> {
    return this.http.put(`${this.basePath}/branche`, branche, {responseType: 'text'});
  }

  deleteBranche(brancheUUI: string): Observable<any> {
    return this.http.delete(`${this.basePath}/branche/${brancheUUI}`, {responseType: 'text'});
  }

}
