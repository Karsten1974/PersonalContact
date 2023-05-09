import {Component, Input, OnInit} from '@angular/core';
import {ContactDto} from "../../../../base/generated/models/contact-dto";
import {VerbindungDto} from "../../../../base/generated/models/verbindung-dto";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: ContactDto[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  telefon(ct: ContactDto): string | undefined {
    let verb: Array<VerbindungDto> | undefined = ct.verbindungen;
    if (verb) {
      for (let vb of verb) {
        if (vb.verbindungsart == 'TELEFON') {
          return vb.verbindungsdaten;
        }
      }
    }

    return "";
  }

}
