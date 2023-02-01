import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdresseData, ListItem } from '../../shared/data';
import { PersonalconDataService } from '../../shared/personalcon-data.service';
import { AdressenUpdate } from '../adressen-update.subject';

@Component({
  selector: 'tb-adresse-adressen',
  templateUrl: './adresse-adressen.component.html',
  styleUrls: ['./adresse-adressen.component.css']
})
export class AdresseAdressenComponent implements OnInit {
  @Input() adressenForm: FormGroup = new FormGroup('');
  @Input() adressen: ListItem[] = [];


  constructor(private adressenUpdate: AdressenUpdate, private ds: PersonalconDataService) { }

  ngOnInit(): void {
  }

  adresseCB() {
    const formValue = this.adressenForm.value
    let adressenUUID = formValue['adrUUID'];
    console.log('AdresseAdressenComponent.adresseCB:' + adressenUUID);

    let adrData: AdresseData = {strasse:'', id:'', version:0, ort:'',plz:'' };
    this.ds.getAdresse(adressenUUID).subscribe(adr => {
      this.adressenUpdate.adresseChanged$.next(adr);
      adrData = adr;
    });
  }

}
