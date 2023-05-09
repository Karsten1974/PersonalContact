import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../backend-api/contact.service";
import {ContactDto} from "../../base/generated/models/contact-dto";

@Component({
  selector: 'contact-verwalten',
  templateUrl: './contact-verwalten.component.html',
  styleUrls: ['./contact-verwalten.component.css']
})
export class ContactVerwaltenComponent implements OnInit {
  phaseDialoNeuanlage: number = 0;
  contacts: ContactDto[] = [];
  contactId: string = '';

  constructor(private cs: ContactService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.cs.getContacts().subscribe(res => this.contacts = res);
  }

  onNeu() {
    this.phaseDialoNeuanlage = 1;
  }

  onNeuClose(contactId: string) {
    if (contactId != '') {
      this.phaseDialoNeuanlage = 2;
      this.contactId = contactId;
    } else {
      this.phaseDialoNeuanlage = 0;
      this.contactId = '';
    }
  }

  onAdresseClose() {
    this.phaseDialoNeuanlage = 0;
  }
}
