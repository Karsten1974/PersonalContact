import { Component, OnInit } from '@angular/core';
import {ContactDto} from "../../backend-api/models/contact-dto";
import {ContactService} from "../../shared/service/contact.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'contact-bearbeiten',
  templateUrl: './contact-bearbeiten.component.html',
  styleUrls: ['./contact-bearbeiten.component.css']
})
export class ContactBearbeitenComponent implements OnInit {
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
    geburtstag: '',
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

  onZurueck() {
    this.router.navigate(['/verwalten']);
  }

  onDel() {
    this.cs.deleteContact(this.contact.id).subscribe(() => {
      this.router.navigate(['/verwalten/'])
    });
  }
}
