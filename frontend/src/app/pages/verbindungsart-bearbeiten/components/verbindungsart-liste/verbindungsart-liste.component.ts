import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListItem } from '../../../../shared/data';

@Component({
  selector: 'verbindungsart-liste',
  templateUrl: './verbindungsart-liste.component.html',
  styleUrls: ['./verbindungsart-liste.component.css']
})
export class VerbindungsartListeComponent implements OnInit {
  @Input() verbindungsarten: ListItem[] = [];

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
  }

}
