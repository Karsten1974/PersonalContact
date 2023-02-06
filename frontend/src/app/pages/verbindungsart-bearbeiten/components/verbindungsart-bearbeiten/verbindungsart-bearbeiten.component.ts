import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'verbindungsart-bearbeiten',
  templateUrl: './verbindungsart-bearbeiten.component.html',
  styleUrls: ['./verbindungsart-bearbeiten.component.css']
})
export class VerbindungsartBearbeitenComponent implements OnInit {
  @Input() verbindungsartForm: FormGroup = new FormGroup('');

  constructor() { }

  ngOnInit(): void {
  }

}
