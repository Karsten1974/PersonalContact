import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'branche-bearbeiten',
  templateUrl: './branche-bearbeiten.component.html',
  styleUrls: ['./branche-bearbeiten.component.css']
})
export class BrancheBearbeitenComponent implements OnInit {
  @Input() branchenForm: FormGroup = new FormGroup('');

  constructor() { }

  ngOnInit(): void {
  }

}
