import {Component, Input, OnInit} from '@angular/core';
import {ContactDto} from "../../../../backend-api/models/contact-dto";
import {ContactService} from "../../../../shared/service/contact.service";
import {BrancheDto} from "../../../../backend-api/models/branche-dto";
import {BrancheService} from "../../../../shared/service/branche.service";

@Component({
  selector: 'contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.css']
})
export class ContactPersonComponent implements OnInit {
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

  constructor(private bs: BrancheService, private cs: ContactService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.bs.getBranchen().subscribe(res => this.branchen = res);
  }

  onBearbeiten() {
    this.bs.getBrancheByFachCode(this.contact.brancheFachCode).subscribe({
        next: res => {
          this.selBranche = res;
        }, error: () => {
          // Branche Temp. erstellen ...
          this.selBranche = {
            fachCode: this.contact.brancheFachCode,
            bezeichnung: this.contact.brancheBezeichnung,
            id: '0', version: 0
          };

          //... und zufügen
          this.branchen.push(this.selBranche);
        }
      }
    );
    this.personEdit = true;
  }

  onCancel() {
    this.personEdit = false;
  }

  onSpeichern() {
    this.cs.getContact(this.contact.id).subscribe(res => {

      let saveContact: ContactDto = {
        'id': this.contact.id,
        'version': res.version,
        'brancheFachCode': res.brancheFachCode,
        'brancheBezeichnung': res.brancheBezeichnung,
        'name': this.contact.name,
        'vorname': this.contact.vorname,
        'strasse': this.contact.strasse,
        'plz': this.contact.plz,
        'ort': this.contact.ort,
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
