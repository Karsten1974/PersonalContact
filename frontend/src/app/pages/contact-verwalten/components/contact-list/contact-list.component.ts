import {Component, Input, OnInit} from '@angular/core';
import {ContactDto} from "../../../../backend-api/models/contact-dto";
import {VerbindungDto} from "../../../../backend-api/models/verbindung-dto";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: ContactDto[] = [];
  @Input() layout: 'list' | 'grid' = "list";
  constructor() {}

  ngOnInit(): void {
  }

  telefon(ct: ContactDto, art: string): string | undefined {
    let verb: Array<VerbindungDto> | undefined = ct.verbindungen;
    if (verb) {
      for (let vb of verb) {
        if (vb.verbindungsart == art) {
          return vb.verbindungsdaten;
        }
      }
    }

    return "";
  }

}
