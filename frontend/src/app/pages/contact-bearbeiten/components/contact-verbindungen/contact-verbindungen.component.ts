import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ContactDto} from "../../../../backend-api/models/contact-dto";
import {VerbindungDto} from "../../../../backend-api/models/verbindung-dto";
import {ContactService} from "../../../../shared/service/contact.service";

@Component({
  selector: 'contact-verbindungen',
  templateUrl: './contact-verbindungen.component.html',
  styleUrls: ['./contact-verbindungen.component.css']
})
export class ContactVerbindungenComponent implements OnInit, OnChanges {
  verbindungsArten: { verbindungsart: string; bezeichnung: string }[] = [
  {
    verbindungsart: 'TELEFON',
    bezeichnung: 'Tel'
  },
  {
    verbindungsart: 'MOBIL',
    bezeichnung: 'mobil'
  },
  {
    verbindungsart: 'EMAIL',
    bezeichnung: 'eMail'
  }
  ];

  verbindungen: VerbindungDto[] | undefined;
  selectedVerbindung: VerbindungDto | undefined;
  editVerbindungsArt= this.verbindungsArten[0];
  editVerbindungsdaten: string = '';

  verbindungenEdit = false;
  @Input() contact : ContactDto = {
    version: 0,
    id: '',
    brancheFachCode: '',
    brancheBezeichnung: ''
  };
  constructor(private cs: ContactService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.contact.id) {
      this.loadVerbindungsdaten();
    }
  }

  onBearbeiten() {
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

  verbindungArt(verbindung: VerbindungDto): string | undefined  {
    for (let vdaItem of this.verbindungsArten) {
      if (vdaItem.verbindungsart === verbindung.verbindungsart) {
        return vdaItem.bezeichnung;
      }
    }

    return "";
  }

  onCancel() {
    this.verbindungenEdit = false;
    this.resetEingabeFelderUndSelection();
  }

  onSpeichern() {
    if (this.selectedVerbindung) {
      this.verbindungen?.forEach(value => {

        if (value.id === this.selectedVerbindung?.id) {

          if (this.editVerbindungsArt.verbindungsart === 'TELEFON') {
            value.verbindungsart = 'TELEFON';
          } else if (this.editVerbindungsArt.verbindungsart === 'MOBIL') {
            value.verbindungsart = 'MOBIL';
          } if (this.editVerbindungsArt.verbindungsart === 'EMAIL') {
            value.verbindungsart = 'EMAIL';
          }

          value.verbindungsdaten = this.editVerbindungsdaten;
        }
      });

    } else {
      if (this.editVerbindungsdaten != '') {
        let vb :VerbindungDto = {
          id:'',
          reihenfolge: 0,
          version: 0,
          verbindungsdaten: this.editVerbindungsdaten,
          verbindungsart: 'TELEFON'
        };

        if (this.editVerbindungsArt.verbindungsart === 'TELEFON') {
          vb.verbindungsart = 'TELEFON';
        } else if (this.editVerbindungsArt.verbindungsart === 'MOBIL') {
          vb.verbindungsart = 'MOBIL';
        } if (this.editVerbindungsArt.verbindungsart === 'EMAIL') {
          vb.verbindungsart = 'EMAIL';
        }

        this.verbindungen?.push(vb);
      }
    }

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
        'verbindungen': this.verbindungen
      };

      this.cs.updateContact(saveContact).subscribe( res => {
        this.verbindungenEdit = false;
        this.contact = saveContact;
        this.resetEingabeFelderUndSelection();
        this.loadVerbindungsdaten();
      });

    });

  }

  private loadVerbindungsdaten() {
    this.cs.getContact(this.contact.id).subscribe(res=> {
      this.verbindungen = res.verbindungen;
    });
  }

  onDeleteVerbindung(verbindung: VerbindungDto) {
    if (this.verbindungen) {
      let verbindungenNeue = this.verbindungen.filter(value => {
        return value.id != verbindung.id;
      });

      this.verbindungen = verbindungenNeue;
      this.onSpeichern();
    }
  }

  onNeu() {
    this.resetEingabeFelderUndSelection()
  }

  private resetEingabeFelderUndSelection() {
    this.selectedVerbindung = undefined;

    this.editVerbindungsArt = this.verbindungsArten[0];
    this.editVerbindungsdaten = '';
  }

  onSelectVerbindung() {
    let verbArtItem = this.verbindungsArten[0];
    let verbDaten = '';

    if (this.selectedVerbindung) {
      for (let vdaItem of this.verbindungsArten) {
        if (vdaItem.verbindungsart === this.selectedVerbindung.verbindungsart) {
          verbArtItem = vdaItem;
        }
      }

      if (this.selectedVerbindung.verbindungsdaten) {
        verbDaten = this.selectedVerbindung.verbindungsdaten;
      }
    }

    this.editVerbindungsArt = verbArtItem;
    this.editVerbindungsdaten = verbDaten;
  }

}
