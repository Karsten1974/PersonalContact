import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tb-adresse-todesliste',
  templateUrl: './adresse-todesliste.component.html',
  styleUrls: ['./adresse-todesliste.component.css']
})
export class AdresseTodeslisteComponent implements OnInit {
  @Input() adressenForm: FormGroup = new FormGroup('');

  constructor() { }

  ngOnInit(): void {
  }

}
