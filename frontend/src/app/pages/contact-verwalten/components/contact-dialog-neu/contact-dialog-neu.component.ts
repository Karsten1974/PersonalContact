import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BrancheDto} from "../../../../base/generated/models/branche-dto";
import {BrancheService} from "../../../../backend-api/branche.service";
import {ContactCreateDto} from "../../../../base/generated/models/contact-create-dto";
import {ContactService} from "../../../../backend-api/contact.service";

@Component({
  selector: 'contact-dialog-neu',
  templateUrl: './contact-dialog-neu.component.html',
  styleUrls: ['./contact-dialog-neu.component.css']
})
export class ContactDialogNeuComponent implements OnInit {
  contactForm: FormGroup = this.fb.group({
    branche: '',
    name: [''],
    vorname: ['']
  });

  selBranche: BrancheDto = {
    version: 0,
    id: '',
    fachCode: 'toBeSave',
    bezeichnung: ''
  };

  @Output() close = new EventEmitter<string>();

  branchen: BrancheDto[] =[];

  constructor(private fb: FormBuilder, private bs: BrancheService, private cs: ContactService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.bs.getBranchen().subscribe(res => this.branchen = res);
  }

  submitFormSpeichern() {
    /*
    const formValue = this.contactForm.value;
    const contact: ContactCreateDto = {
      brancheFachCode: '',
      brancheBezeichnung: '',
      name: formValue['name'],
      vorname: formValue['vorname']
    };

    if (this.selBranche.fachCode != '') {
      contact.brancheFachCode = this.selBranche.fachCode;
      contact.brancheBezeichnung = this.selBranche.bezeichnung;
    }

    this.cs.createContact(contact).subscribe(res => {
      this.close.emit(res);
    });
    */

    this.close.emit("1");
  }

  onClose() {
    this.close.emit('');
  }

  /*onBranche() {
    const formValue = this.contactForm.value;
    this.bs.getBranche(formValue['branche']).subscribe(res => this.selBranche = res);
    if (this.selBranche.fachCode != '') {
      this.brancheNeu = false;
    }
  }*/

}
