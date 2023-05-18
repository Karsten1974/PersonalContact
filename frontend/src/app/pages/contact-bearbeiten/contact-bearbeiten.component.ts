import { Component, OnInit } from '@angular/core';
import {ContactDto} from "../../base/generated/models/contact-dto";
import {ContactService} from "../../backend-api/contact.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'contact-bearbeiten',
  templateUrl: './contact-bearbeiten.component.html',
  styleUrls: ['./contact-bearbeiten.component.css']
})
export class ContactBearbeitenComponent implements OnInit {
  clickZusatz = false;
  contact: ContactDto = {
    version: 0,
    id: '',
    name: '',
    verbindungen: [],
    ort: '',
    plz: '',
    brancheBezeichnung: '',
    strasse: '',
    vorname: '',
    brancheFachCode: '',
    bemerkung: '',
    todesBemerkung: '',
    todesprio: ''
  };

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private cs: ContactService) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    let pContactUUID = params.get('contactUUID');

    if (pContactUUID != null) {
      this.cs.getContact(pContactUUID).subscribe(res => this.contact = res);
    }
  }

  onClickZusatz() {
    this.clickZusatz = !this.clickZusatz;
  }

  onZurueck() {
    this.router.navigate(['/verwalten']);
  }
}
