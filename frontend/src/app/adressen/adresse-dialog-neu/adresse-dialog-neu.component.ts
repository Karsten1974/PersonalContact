import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ListItem, ContactData } from '../../shared/data';
import { PersonalconDataService } from '../../shared/personalcon-data.service';

@Component({
  selector: 'tb-adresse-dialog-neu',
  templateUrl: './adresse-dialog-neu.component.html',
  styleUrls: ['./adresse-dialog-neu.component.css']
})
export class AdresseDialogNeuComponent implements OnInit {
  adressenForm: FormGroup = this.fb.group({
    brancheUUID: '1',
    name: [''],
    vorname: ['']
  });

  @Output() close = new EventEmitter<void>();
  @Input() branchen: ListItem[] = [];

  constructor(private fb: FormBuilder, private router: Router, private ds: PersonalconDataService) { }

  ngOnInit(): void {
  }

  submitFormSpeichern() {
    console.log('submitForm/Speichern');

    const formValue = this.adressenForm.value;
    const contact: ContactData = {...formValue};

    this.ds.createContact(contact).subscribe(tb => {
      this.router.navigate(['/adressen/', tb.id]);
      this.close.emit();
    });

  }

  onClose() {
    this.close.emit();
  }

}
