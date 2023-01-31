import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ListItem } from '../../shared/data';

@Component({
  selector: 'tb-adresse-person',
  templateUrl: './adresse-person.component.html',
  styleUrls: ['./adresse-person.component.css']
})
export class AdressePersonComponent implements OnInit {
  @Input() adressenForm: FormGroup = new FormGroup('');
  @Input() branchen: ListItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
