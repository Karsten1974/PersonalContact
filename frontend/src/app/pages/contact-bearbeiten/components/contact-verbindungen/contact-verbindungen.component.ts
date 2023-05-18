import {Component, Input, OnInit} from '@angular/core';
import {ContactDto} from "../../../../base/generated/models/contact-dto";
import {VerbindungDto} from "../../../../base/generated/models/verbindung-dto";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ContactService} from "../../../../backend-api/contact.service";

@Component({
  selector: 'contact-verbindungen',
  templateUrl: './contact-verbindungen.component.html',
  styleUrls: ['./contact-verbindungen.component.css']
})
export class ContactVerbindungenComponent implements OnInit {
  verbindungForm: FormGroup = this.fb.group({
    telefon: [''],
    mobil: [''],
    email: ['']
  });
  verbindungenEdit = false;
  @Input() contact : ContactDto = {
    version: 0,
    id: '',
    brancheFachCode: '',
    brancheBezeichnung: ''
  };
  constructor(private fb: FormBuilder, private cs: ContactService) { }

  ngOnInit(): void {
  }

  onBearbeiten() {
    let verbindungen = {
      'telefon': this.verbindungDaten(this.contact, 'TELEFON'),
      'mobil': this.verbindungDaten(this.contact, 'MOBIL'),
      'email': this.verbindungDaten(this.contact, 'EMAIL')
    }

    this.verbindungForm.patchValue(verbindungen);
    this.verbindungenEdit = true;
  }

  verbindungDaten(ct: ContactDto, verbArt: string): string | undefined {
    let verb: Array<VerbindungDto> | undefined = ct.verbindungen;
    if (verb) {
      for (let vb of verb) {
        if (vb.verbindungsart === verbArt) {
          return vb.verbindungsdaten;
        }
      }
    }

    return "";
  }

  setzeVerbindungDaten(verb: Array<VerbindungDto>, verbArt?: 'TELEFON' | 'MOBIL' | 'EMAIL', wert?: string) {
    let bFound = false;
    for (let vb of verb) {
      if (vb.verbindungsart === verbArt) {
        vb.verbindungsdaten = wert;
        bFound = true;
      }
    }

    if (!bFound) {
      verb.push({
        'id': '',
        'verbindungsart': verbArt,
        'verbindungsdaten': wert
      });
    }
  }

  onCancel() {
    this.verbindungenEdit = false;
  }

  onSpeichern() {
    const formValue = this.verbindungForm.value;

    this.cs.getContact(this.contact.id).subscribe(res => {

      let saveContact: ContactDto = {
        'id': this.contact.id,
        'version': res.version,
        'brancheFachCode': res.brancheFachCode,
        'brancheBezeichnung': res.brancheBezeichnung,
        'name': res.name,
        'vorname': res.vorname,
        'strasse': res.strasse,
        'plz': res.plz,
        'ort': res.ort,
        'bemerkung': res.bemerkung,
        'todesprio': res.todesprio,
        'todesBemerkung': res.todesBemerkung,
        'verbindungen': res.verbindungen
      };

      let verbindungen = saveContact.verbindungen;

      if (formValue['telefon'] != '') {
        if (verbindungen) this.setzeVerbindungDaten(verbindungen, 'TELEFON', formValue['telefon']);
      }

      if (formValue['mobil'] != '') {
        if (verbindungen) this.setzeVerbindungDaten(verbindungen, 'MOBIL', formValue['mobil']);
      }

      if (formValue['email'] != '') {
        if (verbindungen) this.setzeVerbindungDaten(verbindungen, 'EMAIL', formValue['email']);
      }

      this.cs.updateContact(saveContact).subscribe( res => {
        this.verbindungenEdit = false;
        this.contact = saveContact;
      });

    });

  }

}
