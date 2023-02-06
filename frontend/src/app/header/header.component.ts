import { Component, OnInit } from '@angular/core';

export enum TabHeader {
  Adressen=1, Branchen=2, Verbindungsarten
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Make a variable reference to our Enum
  eTabHeader = TabHeader;

  selectedTab: TabHeader = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onTabSelect(tab: TabHeader) {
    this.selectedTab = tab;
  }
}
