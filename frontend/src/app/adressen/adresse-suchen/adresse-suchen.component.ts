import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListItem, ContactData } from '../../shared/data';
import { PersonalconDataService } from '../../shared/personalcon-data.service';

@Component({
  selector: 'tb-adresse-suchen',
  templateUrl: './adresse-suchen.component.html',
  styleUrls: ['./adresse-suchen.component.css']
})
export class AdresseSuchenComponent implements OnInit {

  adressenFound: ContactData[] = [];

  constructor(private router: Router, private ds: PersonalconDataService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    console.log('AdresseSuchenComponent ngOnInit');
    this.initForm();
  }

  private initForm() {
    this.ds.getContacts().subscribe(res => this.adressenFound = res);
  }

}
