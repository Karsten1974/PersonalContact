import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tb-adresse-person-zusatz',
  templateUrl: './adresse-person-zusatz.component.html',
  styleUrls: ['./adresse-person-zusatz.component.css']
})
export class AdressePersonZusatzComponent implements OnInit {
  @Input() adressenForm: FormGroup = new FormGroup('');

  constructor() { }

  ngOnInit(): void {
  }

}
