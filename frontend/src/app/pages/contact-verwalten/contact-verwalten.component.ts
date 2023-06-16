import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../backend-api/contact.service";
import {ContactDto} from "../../base/generated/models/contact-dto";

@Component({
  selector: 'contact-verwalten',
  templateUrl: './contact-verwalten.component.html',
  styleUrls: ['./contact-verwalten.component.css']
})
export class ContactVerwaltenComponent implements OnInit {
  contacts: ContactDto[] = [];
  contactId: string = '';
  dialogNeu: boolean = false;
  dialogAdresse: boolean = false;

  constructor(private cs: ContactService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.cs.getContacts().subscribe(res => this.contacts = res);
  }

  onNeu() {
    this.dialogNeu = true;
  }

  onNeuClose(contactId: string) {
    if (contactId != '') {
      this.dialogNeu = false;
      this.dialogAdresse = true;
      this.contactId = contactId;
    } else {
      this.dialogNeu = false;
      this.dialogAdresse = false;
      this.contactId = '';
    }
  }

  onAdresseClose() {
    this.dialogNeu = false;
    this.dialogAdresse = false;
    this.initForm();
  }
}
