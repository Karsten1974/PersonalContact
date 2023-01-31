import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ListItem, VerbindungsData } from '../../shared/data';
import { PersonalconDataService } from '../../shared/personalcon-data.service';

@Component({
  selector: 'tb-adresse-verbindungsdaten',
  templateUrl: './adresse-verbindungsdaten.component.html',
  styleUrls: ['./adresse-verbindungsdaten.component.css']
})
export class AdresseVerbindungsdatenComponent implements OnInit {
  @Input() verbindungsdatenArten: ListItem[] = [];
  verbindungsdatenForm: FormGroup = new FormGroup('');

  constructor(private ds: PersonalconDataService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let verbindungsdaten: VerbindungsData[] = [];
    this.ds.getVerbindungsdaten("").subscribe(vd => verbindungsdaten = vd);

    /* Verbindungsdaten bestehen aus Zeilen mit jeweils 2 Controls
     * Die Zeilen (Array) werden als >verbindungsdaten< in einer FormGroup abgelegt.
     */
    let verbindungsdatenFormArray = new FormArray<FormGroup>([]);

    for (let vdItem of verbindungsdaten) {
      verbindungsdatenFormArray.push(
        new FormGroup({
          'verbindungsdatenArtUUID': new FormControl(vdItem.verbindungsdatenArtUUID),
          'verbindungsdaten': new FormControl(vdItem.verbindungsdaten)
        })
      );
    }

    this.verbindungsdatenForm = new FormGroup({
      'verbindungsdaten': verbindungsdatenFormArray
    });
  }

  get controls() {
    return (<FormArray>this.verbindungsdatenForm.get('verbindungsdaten')).controls;
  }
}
