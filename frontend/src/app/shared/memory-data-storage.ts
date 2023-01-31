import { KeyValue } from '@angular/common';
import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs';
import { AdresseData, ListItem, ContactData, VerbindungsData } from './data';

export class MemoryDataStorage {
  branchen_old: KeyValue<number, string>[];
  branchen: ListItem[];
  adressen: ListItem[];
  adressenFound: ListItem[];
  verbindungsdatenArten: ListItem[];

  adressenList: AdresseData[];
  contactList: ContactData[];
  verbindungsdatenList: VerbindungsData[];

  constructor() {
    this.branchen_old = [
      {
        key: 1,
        value: 'Familie'
      },
      {
        key: 2,
        value: 'Freunde'
      }
    ];

    this.branchen = [
      {
        version: 1,
        id: '1',
        bezeichnung: 'Familie'
      },
      {
        version: 2,
        id: '2',
        bezeichnung: 'Freunde'
      }
    ];

    this.verbindungsdatenArten = [
      {
        version: 1,
        id: '1',
        bezeichnung: 'Tel'
      },
      {
        version: 2,
        id: '2',
        bezeichnung: 'mobil'
      },
      {
        version: 3,
        id: '3',
        bezeichnung: 'eMail'
      }
    ];

    this.adressen = [
      {
        version: 1,
        id: 'ecd63862-39e8-12f4-9c0a-edfcc7612571',
        bezeichnung: 'Entenhausen, Duckstr. 1'
      },
      {
        version: 2,
        id: 'ecd63862-39e8-42f4-9c0a-edfcc7612572',
        bezeichnung: 'Entenhausen, Dargo 2'
      }
    ];

    this.adressenList = [
      {
        version: 1,
        adrUUID: 'ecd63862-39e8-12f4-9c0a-edfcc7612571',
        strasse: 'Duckstr. 1',
        plz: '23876',
        ort: 'Entenhausen'
      },
      {
        version: 1,
        adrUUID: 'ecd63862-39e8-42f4-9c0a-edfcc7612572',
        strasse: 'Dargo 2',
        plz: '23876',
        ort: 'Entenhausen'
      }
    ];

    this.contactList = [
      {
        version: 1,
        id: '1',
        brancheUUID: '2',
        adrUUID: '2',
        verbUUID: '',
        name: 'Duck',
        vorname: 'Donald',
        bemerkung: 'Das bin ich',
        todesprio: "0",
        todesBemerkung: 'wäre mir dann egal'
      },
      {
        version: 1,
        id: '2',
        brancheUUID: 'ecd63862-39e8-42f4-9c0a-edfcc761257d',
        adrUUID: '1',
        verbUUID: '',
        name: 'Duck',
        vorname: 'Dagobert',
        bemerkung: 'Schwester',
        todesprio: "9",
        todesBemerkung: 'Familie Manager'
      }
    ];

    this.adressenFound = [
      {
        version: 1,
        id: '1',
        bezeichnung: ''
      },
      {
        version: 1,
        id: '2',
        bezeichnung: ''
      }
    ];

    this.verbindungsdatenList = [
      {
        version: 1,
        verbindungsdatenArtUUID: '1',
        verbindungsdaten: '0815'
      },
      {
        version: 1,
        verbindungsdatenArtUUID: '2',
        verbindungsdaten: '4711'
      },
      {
        version: 1,
        verbindungsdatenArtUUID: '3',
        verbindungsdaten: 'test@deu.de'
      }
    ];
  }

  getBranchen_old(): Observable<KeyValue<number, string>[]> {
    let ret = new Observable<KeyValue<number, string>[]>((observer:Subscriber<KeyValue<number, string>[]>)  => {
      observer.next(this.branchen_old);
    });

    return ret;
  }

  getBranchen(): Observable<ListItem[]> {
    let ret = new Observable<ListItem[]>((observer:Subscriber<ListItem[]>)  => {
      observer.next(this.branchen);
    });

    return ret;
  }
  getVerbindungsdatenArten(): Observable<ListItem[]> {
    let ret = new Observable<ListItem[]>((observer:Subscriber<ListItem[]>)  => {
      observer.next(this.verbindungsdatenArten);
    });

    return ret;
  }

  getAdressen(): Observable<ListItem[]> {
    let ret = new Observable<ListItem[]>((observer:Subscriber<ListItem[]>)  => {
      observer.next(this.adressen);
    });

    return ret;
  }

  getAdresse(adrUUID: string): Observable<AdresseData> {
    let ret = new Observable<AdresseData>((observer:Subscriber<AdresseData>)  => {
      let myAdresseData = this.adressenList.find(a => a.adrUUID === adrUUID);
      observer.next(myAdresseData);
    });

    return ret;
  }

  getContact(contactUUID: string): Observable<ContactData> {
    let ret = new Observable<ContactData>(observer => {
      let myContactData = this.contactList.find(t => t.id === contactUUID);
      observer.next(myContactData);
      console.log('getContact '+myContactData);
    });

    return ret;
  }

  getAdressenFound(): Observable<ListItem[]> {
    let ret = new Observable<ListItem[]>((observer:Subscriber<ListItem[]>)  => {
      observer.next(this.adressenFound);
    });

    return ret;
  }

  getVerbindungsdaten(contactUUID: string): Observable<VerbindungsData[]> {
    let ret = new Observable<VerbindungsData[]>(observer => {
      observer.next(this.verbindungsdatenList);
    });

    return ret;
  }
}
