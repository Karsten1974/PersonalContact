import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BrancheDto} from "../../../../base/generated/models/branche-dto";

@Component({
  selector: 'branche-liste',
  templateUrl: './branche-liste.component.html',
  styleUrls: ['./branche-liste.component.css']
})
export class BrancheListeComponent implements OnInit {
  @Input() branchen: BrancheDto[] = [];

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
  }

}
