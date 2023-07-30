import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BrancheDto} from "../../../../backend-api/models/branche-dto";

@Component({
  selector: 'branche-liste',
  templateUrl: './branche-liste.component.html',
  styleUrls: ['./branche-liste.component.css']
})
export class BrancheListeComponent implements OnInit {
  @Input() branchen: BrancheDto[] = [];
  selectedBranche: BrancheDto;

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.selectedBranche = {bezeichnung: "", fachCode: "", id: ""};
  }

  ngOnInit(): void {
  }

}
