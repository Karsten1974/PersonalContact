import { Injectable } from '@angular/core';
import {ContactControllerService} from "../../backend-api/services/contact-controller.service";
import {Observable} from "rxjs";
import {ContactDto} from "../../backend-api/models/contact-dto";
import {ContactCreateDto} from "../../backend-api/models/contact-create-dto";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private cs: ContactControllerService) { }

  getContacts(): Observable<ContactDto[]> {
    return this.cs.getContacts();
  }

  getContact(contactID: string): Observable<ContactDto> {
    return this.cs.getContact({contactID: contactID});
  }
  createContact(contact: ContactCreateDto): Observable<string> {
    return this.cs.create({body: {...contact}});
  }

  updateContact(contact: ContactDto): Observable<any> {
    return this.cs.update({body: contact});
  }

  deleteContact(contactID: string): Observable<any> {
    return this.cs.delete({contactID: contactID});
  }

  getContatsBySearch(search: string): Observable<Array<ContactDto>> {
    return this.cs.getContatsBySearch({search: search});
  }

}
