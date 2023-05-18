import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ContactDto} from "../../../../base/generated/models/contact-dto";
import {ContactService} from "../../../../backend-api/contact.service";

@Component({
  selector: 'contact-zusatz',
  templateUrl: './contact-zusatz.component.html',
  styleUrls: ['./contact-zusatz.component.css']
})
export class ContactZusatzComponent implements OnInit {
  zusatzForm: FormGroup = this.fb.group({
    geburtstag: [''],
    bemerkung: [''],
    todesprio: '',
    todesBemerkung: ['']
  });
  zusatzEdit = false;
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
    this.zusatzForm.patchValue(this.contact);
    this.zusatzEdit = true;
  }

  onCancel() {
    this.zusatzEdit = false;
  }

  onSpeichern() {
    const formValue = this.zusatzForm.value;

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
        'bemerkung': formValue['bemerkung'],
        'todesprio': formValue['todesprio'],
        'todesBemerkung': formValue['todesBemerkung'],
        'verbindungen': res.verbindungen
      };

      this.cs.updateContact(saveContact).subscribe( res => {
        this.zusatzEdit = false;
        this.contact = saveContact;
      });

    });
  }

}
