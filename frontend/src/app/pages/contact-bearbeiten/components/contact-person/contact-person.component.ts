import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ContactDto} from "../../../../base/generated/models/contact-dto";
import {ContactService} from "../../../../backend-api/contact.service";
import {BrancheDto} from "../../../../base/generated/models/branche-dto";
import {BrancheService} from "../../../../backend-api/branche.service";

@Component({
  selector: 'contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.css']
})
export class ContactPersonComponent implements OnInit {
  personForm: FormGroup = this.fb.group({
    brancheFachCode: '',
    name: [''],
    vorname: [''],
    strasse: [''],
    plz: [''],
    ort: ['']
  });
  selBranche: BrancheDto = {
    version: 0,
    id: '',
    fachCode: '',
    bezeichnung: ''
  };
  personEdit = false;
  branchen: BrancheDto[] =[];
  @Input() contact : ContactDto = {
    version: 0,
    id: '',
    brancheFachCode: '',
    brancheBezeichnung: ''
  };

  constructor(private fb: FormBuilder, private bs: BrancheService, private cs: ContactService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.bs.getBranchen().subscribe(res => this.branchen = res);
  }

  onBearbeiten() {
    this.personForm.patchValue(this.contact);
    this.personEdit = true;
  }

  onBranche() {
    const formValue = this.personForm.value;
    this.bs.getBrancheByFachCode(formValue['brancheFachCode']).subscribe(res => this.selBranche = res);
  }

  onCancel() {
    this.personEdit = false;
  }

  onSpeichern() {
    const formValue = this.personForm.value;

    this.cs.getContact(this.contact.id).subscribe(res => {

      let saveContact: ContactDto = {
        'id': this.contact.id,
        'version': res.version,
        'brancheFachCode': res.brancheFachCode,
        'brancheBezeichnung': res.brancheBezeichnung,
        'name': formValue['name'],
        'vorname': formValue['vorname'],
        'strasse': formValue['strasse'],
        'plz': formValue['plz'],
        'ort': formValue['ort'],
        'bemerkung': res.bemerkung,
        'todesprio': res.todesprio,
        'todesBemerkung': res.todesBemerkung,
        'verbindungen': res.verbindungen
      };

      if (this.selBranche.fachCode != '') {
        saveContact.brancheFachCode = this.selBranche.fachCode;
        saveContact.brancheBezeichnung = this.selBranche.bezeichnung;
      }

      this.cs.updateContact(saveContact).subscribe( res => {
        this.personEdit = false;
        this.contact = saveContact;
      });

    });
  }

}
