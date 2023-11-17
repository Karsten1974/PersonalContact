import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ContactDto} from "../../../../backend-api/models/contact-dto";
import {VerbindungDto} from "../../../../backend-api/models/verbindung-dto";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ContactService} from "../../../../shared/service/contact.service";

@Component({
  selector: 'contact-verbindungen',
  templateUrl: './contact-verbindungen.component.html',
  styleUrls: ['./contact-verbindungen.component.css']
})
export class ContactVerbindungenComponent implements OnInit, OnChanges {
  verbindungsdatenArten: { verbindungsart: string; bezeichnung: string }[] = [
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
  verbindungsdatenForm: FormGroup = new FormGroup('');
  verbindungenEdit = false;
  @Input() contact : ContactDto = {
    version: 0,
    id: '',
    brancheFachCode: '',
    brancheBezeichnung: ''
  };
  constructor(private fb: FormBuilder, private cs: ContactService) { }

  ngOnInit(): void {
    let verbindungsdatenFormArray = new FormArray<FormGroup>([]);
    this.verbindungsdatenForm = new FormGroup({
      'verbindungsdaten': verbindungsdatenFormArray
    });
  }

  ngOnChanges() {
    if (this.contact.id) {
      this.loadVebindungsdaten();
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

  onCancel() {
    this.verbindungenEdit = false;
  }

  onSpeichern() {
    const formValue = this.verbindungsdatenForm.value;
    let verbindungsdatenFormArray = formValue['verbindungsdaten'];

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

      let verbindungen = new Array<VerbindungDto>;

      for (let frmGrp of verbindungsdatenFormArray) {

        let vb :VerbindungDto = {
          id:frmGrp['id'],
          reihenfolge: frmGrp['reihenfolge'],
          version: frmGrp['version'],
          verbindungsdaten: frmGrp['verbindungsdaten'],
          verbindungsart: 'TELEFON'
        };

        if (frmGrp['verbindungsart'].verbindungsart === 'TELEFON') {
          vb.verbindungsart = 'TELEFON';
        } else if (frmGrp['verbindungsart'].verbindungsart === 'MOBIL') {
          vb.verbindungsart = 'MOBIL';
        } if (frmGrp['verbindungsart'].verbindungsart === 'EMAIL') {
          vb.verbindungsart = 'EMAIL';
        }

        verbindungen.push(vb);
      }

      saveContact.verbindungen = verbindungen;

      this.cs.updateContact(saveContact).subscribe( res => {
        this.verbindungenEdit = false;
        this.contact = saveContact;
      });

    });

  }

  private loadVebindungsdaten() {
    this.cs.getContact(this.contact.id).subscribe(res=> {
      let verbindungsdaten: VerbindungDto[] | undefined = res.verbindungen;

      /* Verbindungsdaten bestehen aus Zeilen mit jeweils 2 Controls
       * Die Zeilen (Array) werden als >verbindungsdaten< in einer FormGroup abgelegt.
       */
      let verbindungsdatenFormArray = new FormArray<FormGroup>([]);

      if (verbindungsdaten != undefined) {
        let verbindungsartItem;
        for (let vdItem of verbindungsdaten) {

          // passende Verbindunsdatenart zu Verbindungsdaten suchen
          let bFound = false;
          for (let vdaItem of this.verbindungsdatenArten) {
            if (vdaItem.verbindungsart === vdItem.verbindungsart) {
              verbindungsartItem = vdaItem;
              bFound = true;
            }
          }

          if (!bFound) {
            verbindungsartItem = this.verbindungsdatenArten[0];
          }

          verbindungsdatenFormArray.push(
            new FormGroup({
              'verbindungsart': new FormControl(verbindungsartItem),
              'verbindungsdaten': new FormControl(vdItem.verbindungsdaten),
              'id': new FormControl(vdItem.id),
              'reihenfolge': new FormControl(vdItem.reihenfolge),
              'version': new FormControl(vdItem.version)
            })
          );
        }
      }

      this.verbindungsdatenForm = new FormGroup({
        'verbindungsdaten': verbindungsdatenFormArray
      });

    });
  }

  get controls() {
    return (<FormArray>this.verbindungsdatenForm.get('verbindungsdaten')).controls;
  }

}
