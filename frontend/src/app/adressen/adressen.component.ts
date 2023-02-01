import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ListItem, ContactData, AdresseData } from '../shared/data';
import { PersonalconDataService } from '../shared/personalcon-data.service';
import { AdressenUpdate } from './adressen-update.subject';

@Component({
  selector: 'tb-adressen',
  templateUrl: './adressen.component.html',
  styleUrls: ['./adressen.component.css']
})
export class AdressenComponent implements OnInit, OnChanges, OnDestroy {
  adressenForm: FormGroup = this.fb.group({
    brancheUUID: '1',
    name: [''],
    vorname: [''],
    geburtstag: [''],
    bemerkung: [''],
    todesprio: "1",
    todesBemerkung: [''],
    adrUUID: '',
    verbindungsdatenArt: '2',
    adresse: this.fb.group( {

      strasse: 'test2',
      plz: "45133",
      ort: "Essen"

    })

  });

  contactLoaded: ContactData  = {
    version: 0,
    id: '',
    brancheUUID: '',
    adrUUID: '',
    verbUUID: '',
    name: '',
    vorname: '',
    bemerkung: ' keine Daten',
    todesprio: "1",
    todesBemerkung: ''
  };

  adresseLoaded: AdresseData = {
    version: 0,
    id: '',
    strasse: '',
    plz: '',
    ort: ''
  }

  branchen: ListItem[] = [];
  adressen: ListItem[] = [];
  verbindungsdatenArten: ListItem[] = [];

  contactUUID: string = '';
  editMode = false;
  subscriptionAdresse: Subscription;

  bDialoNeuanlage = false;

  constructor(private fb: FormBuilder, private adressenUpdate: AdressenUpdate, private ds: PersonalconDataService,
              private route: ActivatedRoute) {
    this.subscriptionAdresse = this.adressenUpdate.adresseChanged$.subscribe(adrData => {this.adressenForm.get('adresse')?.patchValue(adrData); this.adresseLoaded = adrData});
  }

  ngOnChanges() {
    //this.initForm();this.setFormValues(this.contact);
    //
    // Versuchen ohne ngOnChanges zu arbeiten
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    const params = this.route.snapshot.paramMap;
    let pContactUUID = params.get('contactUUID');
    this.editMode = pContactUUID != null;
    console.log("pContactUUID:"+pContactUUID + " editMode:"+this.editMode);
    if (pContactUUID != null) {
      this.contactUUID = pContactUUID;
    } else {
      this.contactUUID = '';
      this.contactLoaded = {
        version: 0,
        id: '',
        brancheUUID: '',
        adrUUID: '',
        verbUUID: '',
        name: '',
        vorname: '',
        bemerkung: ' keine Daten',
        todesprio: "1",
        todesBemerkung: ''
      };
      this.adresseLoaded = {
        version: 0,
        id: '',
        strasse: '',
        plz: '',
        ort: ''
      }
    }
    console.log("contactUUID:"+this.contactUUID);
    this.initForm();
  }

  private initForm() {
    console.log('initForm');

    this.ds.getAdressen().subscribe((res:ListItem[]) => this.adressen = res);
    this.ds.getVerbindungsdatenArten().subscribe((res:ListItem[]) => this.verbindungsdatenArten = res);
    this.ds.getBranchen().subscribe((res:ListItem[]) => this.branchen = res);

    if (this.editMode) {
      console.log('initForm editMode');

      this.ds.getContact(this.contactUUID).subscribe(tb => {
        this.contactLoaded = tb;

        if (tb.adrUUID == null) { tb.adrUUID = '';}
        this.adressenForm.patchValue(tb)

        if (tb.adrUUID != '') {
          this.ds.getAdresse(tb.adrUUID).subscribe(adr => {
            this.adressenUpdate.adresseChanged$.next(adr); // Daten für Adressen-Panel
          });
        }
      });
    }

    if (this.adressenForm) return;
    console.log('initForm aktiv');
  }

  submitForm() {
    console.log('submitForm');

    const formValue = this.adressenForm.value;
    const name = formValue['name'];

    console.log('Branche:'+formValue['brancheUUID']);
    console.log('AdrUUID:'+formValue['adrUUID']);
    console.log('name:'+name);
    console.log('vorname:'+formValue['vorname']);
    console.log('geburtstag:'+formValue['geburtstag']);
    console.log('bemerkung:'+formValue['bemerkung']);
    console.log('todesprio:'+formValue['todesprio']);
    console.log('todesbemerkung:'+formValue['todesBemerkung']);
    console.log('verbindungsdatenArt:'+formValue['verbindungsdatenArt']);
    console.log('adressen:'+formValue['adrUUID']);

    const contact: ContactData = {...formValue, version: this.contactLoaded.version, id: this.contactLoaded.id};

    if (contact.adrUUID == '') {
      console.log('AdrUUID is empty');
      const adresse: AdresseData = {...formValue['adresse']};
      this.ds.createAdresse(adresse).subscribe();
    } else {
      console.log('AdrUUID is not empty');
      const adresse: AdresseData = {...formValue['adresse'], version: this.adresseLoaded.version, id: this.adresseLoaded.id};
      this.ds.updateAdresse(adresse).subscribe();
    }

    this.ds.updateContact(contact).subscribe();
  }

  onNeu() {
    console.log('onNeu()');
    this.bDialoNeuanlage = true;
  }

  onNeuClose() {
    console.log('onNeuClose()');
    this.bDialoNeuanlage = false;
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
    this.subscriptionAdresse.unsubscribe();
  }
}
