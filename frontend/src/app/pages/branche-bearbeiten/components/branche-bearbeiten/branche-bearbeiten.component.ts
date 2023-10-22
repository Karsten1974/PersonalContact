import { Component, Input, OnInit } from '@angular/core';
import {BrancheDto} from "../../../../backend-api/models/branche-dto";
import {BrancheFactory} from "../../../../core/factory/branche-factory";

@Component({
  selector: 'branche-bearbeiten',
  templateUrl: './branche-bearbeiten.component.html',
  styleUrls: ['./branche-bearbeiten.component.css']
})
export class BrancheBearbeitenComponent implements OnInit {
  @Input() branche: BrancheDto = BrancheFactory.empty();
  constructor() { }

  ngOnInit(): void {
  }

}
