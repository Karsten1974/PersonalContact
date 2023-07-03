import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../backend-api/contact.service";
import {ContactDto} from "../../base/generated/models/contact-dto";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'contact-verwalten',
  templateUrl: './contact-verwalten.component.html',
  styleUrls: ['./contact-verwalten.component.css']
})
export class ContactVerwaltenComponent implements OnInit {
  contacts: ContactDto[] = [];
  layout: string = "list";
  suche: string = "";

  constructor(private cs: ContactService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    const params = this.route.snapshot.paramMap;
    let pContactUUID = params.get('contactUUID');

    if (pContactUUID != null) {
      this.cs.getContact(pContactUUID).subscribe(res => {
        let ctAr: Array<ContactDto> = new Array<ContactDto>();
        ctAr.push(res);
        this.contacts = ctAr;
        this.layout = "grid";
      });
    } else {
      this.cs.getContacts().subscribe(res => this.contacts = res);
      this.layout = "list";
    }
  }

  onSearch() {
    if (this.suche != '') {
      this.cs.getContatsBySearch(this.suche).subscribe(res => this.contacts = res);
      this.layout = "list";
    } else {
      this.cs.getContacts().subscribe(res => this.contacts = res);
      this.layout = "list";
    }

  }

}
