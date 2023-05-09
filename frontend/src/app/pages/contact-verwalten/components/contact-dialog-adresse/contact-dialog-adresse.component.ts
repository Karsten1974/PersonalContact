import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BrancheDto} from "../../../../base/generated/models/branche-dto";
import {BrancheService} from "../../../../backend-api/branche.service";
import {ContactService} from "../../../../backend-api/contact.service";
import {ContactDto} from "../../../../base/generated/models/contact-dto";
import {VerbindungDto} from "../../../../base/generated/models/verbindung-dto";

@Component({
  selector: 'contact-dialog-adresse',
  templateUrl: './contact-dialog-adresse.component.html',
  styleUrls: ['./contact-dialog-adresse.component.css']
})
export class ContactDialogAdresseComponent implements OnInit {
  adresseForm: FormGroup = this.fb.group({
    branche: '',
    name: [''],
    vorname: [''],
    strasse: [''],
    plz: [''],
    ort: [''],
    telefon: [''],
    mobil: [''],
    email: ['']
  });
  selBranche: BrancheDto = {
    version: 0,
    id: '',
    fachCode: '',
    bezeichnung: ''
  };

  @Input() contactId: string = '';
  @Output() close = new EventEmitter<void>();

  selectedTab: number = 2;
  branchen: BrancheDto[] =[];
  name: string | undefined = ''; // Im Reiter angezeigt

  constructor(private fb: FormBuilder, private bs: BrancheService, private cs: ContactService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.bs.getBranchen().subscribe(res => this.branchen = res);

    if (this.contactId != '') {
      this.cs.getContact(this.contactId).subscribe(res => {
        this.name = res.name;
        this.adresseForm.patchValue({
          'branche': res.brancheFachCode,
          'name': res.name,
          'vorname': res.vorname
        });
      });
    }
  }

  submitFormSpeichern() {
    const formValue = this.adresseForm.value;

    if (this.contactId != '') {
      this.cs.getContact(this.contactId).subscribe(res => {

        let verbindung: VerbindungDto[] = [];

        if (formValue['telefon'] != '') {
          verbindung.push({
            'id': '',
            'verbindungsart': 'TELEFON',
            'verbindungsdaten': formValue['telefon']
          });
        }

        if (formValue['mobil'] != '') {
          verbindung.push({
            'id': '',
            'verbindungsart': 'MOBIL',
            'verbindungsdaten': formValue['mobil']
          });
        }

        if (formValue['email'] != '') {
          verbindung.push({
            'id': '',
            'verbindungsart': 'EMAIL',
            'verbindungsdaten': formValue['email']
          });
        }

        let contact: ContactDto = {
          'id': this.contactId,
          'version': res.version,
          'name': formValue['name'],
          'vorname': formValue['vorname'],
          'strasse': formValue['strasse'],
          'plz': formValue['plz'],
          'ort': formValue['ort'],
          'brancheFachCode': res.brancheFachCode,
          'brancheBezeichnung': res.brancheBezeichnung,
          'verbindungen': verbindung
        }

        if (this.selBranche.fachCode != '') {
          contact.brancheFachCode = this.selBranche.fachCode;
          contact.brancheBezeichnung = this.selBranche.bezeichnung;
        }

        this.cs.updateContact(contact).subscribe( res => {
          this.close.emit();
        });
      });

    }

  }

  onClose() {
    this.close.emit();
  }

  onBranche() {
    const formValue = this.adresseForm.value;
    this.bs.getBrancheByFachCode(formValue['branche']).subscribe(res => this.selBranche = res);
  }

  onLinks() {
    switch (this.selectedTab) {
      case 1: {
        this.selectedTab = 1;
        break;
      }
      case 2: {
        this.selectedTab = 1;
        break;
      }
      case 3: {
        this.selectedTab = 2;
        break;
      }
      default: {
        this.selectedTab = 1;
        break;
      }
    }
  }

  onRechts() {
    switch (this.selectedTab) {
      case 1: {
        this.selectedTab = 2;
        break;
      }
      case 2: {
        this.selectedTab = 3;
        break;
      }
      case 3: {
        this.selectedTab = 3;
        break;
      }
      default: {
        this.selectedTab = 1;
        break;
      }
    }
  }

}
