import {Component, OnInit, ViewChild} from '@angular/core';
import {BrancheDto} from "../../base/generated/models/branche-dto";
import {BrancheService} from "../../backend-api/branche.service";
import {ContactDto} from "../../base/generated/models/contact-dto";
import {VerbindungDto} from "../../base/generated/models/verbindung-dto";
import {NgForm} from "@angular/forms";
import {ContactCreateDto} from "../../base/generated/models/contact-create-dto";
import {ContactService} from "../../backend-api/contact.service";

@Component({
  selector: 'contact-anlegen',
  templateUrl: './contact-anlegen.component.html',
  styleUrls: ['./contact-anlegen.component.css']
})
export class ContactAnlegenComponent implements OnInit {
  @ViewChild('contactForm', {static: true}) private contactForm!: NgForm;

  selBranche: BrancheDto = {bezeichnung: "", fachCode: "", id: ""};
  branchen: BrancheDto[] =[];
  contact: ContactDto = {brancheBezeichnung: "", brancheFachCode: "", id: ""};
  verbindungen = {telefon: "", mobil: "", email: ""};

  constructor(private bs: BrancheService, private cs: ContactService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.bs.getBranchen().subscribe(res => this.branchen = res);
  }

  public speichern() {
    const contact: ContactCreateDto = {
      brancheFachCode: '',
      brancheBezeichnung: '',
      name: this.contact.name,
      vorname: this.contact.vorname
    };

    if (this.selBranche.fachCode != '') {
      contact.brancheFachCode = this.selBranche.fachCode;
      contact.brancheBezeichnung = this.selBranche.bezeichnung;
    }

    this.cs.createContact(contact).subscribe(res => {
      this.speichernContact(res);
    });
  }

  private speichernContact(contactId: string){
    this.cs.getContact(contactId).subscribe(res => {

      let verbindung: VerbindungDto[] = [];

      if (this.verbindungen.telefon != '') {
        verbindung.push({
          'id': '',
          'verbindungsart': 'TELEFON',
          'verbindungsdaten': this.verbindungen.telefon
        });
      }

      if (this.verbindungen.mobil != '') {
        verbindung.push({
          'id': '',
          'verbindungsart': 'MOBIL',
          'verbindungsdaten': this.verbindungen.mobil
        });
      }

      if (this.verbindungen.email != '') {
        verbindung.push({
          'id': '',
          'verbindungsart': 'EMAIL',
          'verbindungsdaten': this.verbindungen.email
        });
      }

      // Die Branchen Selektion wurde oben beim ersten anlegen schon gespeichert.
      let contact: ContactDto = {
        'id': contactId,
        'version': res.version,
        'name': this.contact.name,
        'vorname': this.contact.vorname,
        'strasse': this.contact.strasse,
        'plz': this.contact.plz,
        'ort': this.contact.ort,
        'brancheFachCode': res.brancheFachCode,
        'brancheBezeichnung': res.brancheBezeichnung,
        'verbindungen': verbindung
      }

      this.cs.updateContact(contact).subscribe(res => {
        this.contactForm.reset();
      });
    });
  }

}
