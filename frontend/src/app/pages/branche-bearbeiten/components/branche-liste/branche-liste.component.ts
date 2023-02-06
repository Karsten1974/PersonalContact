import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListItem } from '../../../../shared/data';

@Component({
  selector: 'branche-liste',
  templateUrl: './branche-liste.component.html',
  styleUrls: ['./branche-liste.component.css']
})
export class BrancheListeComponent implements OnInit {
  @Input() branchen: ListItem[] = [];

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
  }

}
