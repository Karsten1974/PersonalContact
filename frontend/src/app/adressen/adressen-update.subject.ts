import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AdresseData } from '../shared/data';

@Injectable({
  providedIn: 'root'
})
export class AdressenUpdate {
  adresseChanged$ = new Subject<AdresseData>();
}
