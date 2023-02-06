import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VerbindungsartService } from '../../backend-api/verbindungsart.service';
import { VerbindungsartFactory } from '../../core/factory/verbindungsart-factory';
import { ListItem } from '../../shared/data';

@Component({
  selector: 'verbindungsart',
  templateUrl: './verbindungsart.component.html',
  styleUrls: ['./verbindungsart.component.css']
})
export class VerbindungsartComponent implements OnInit {
  verbindungsartForm: FormGroup = this.fb.group({
    bezeichnung: ['']
  });

  verbindungsartLoaded: ListItem = VerbindungsartFactory.empty();

  verbindungsarten: ListItem[] = [];

  verbindungsartUUID: string = '';
  editMode = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private ds: VerbindungsartService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    let pVerbindungsartUUID = params.get('verbindungsartUUID');
    this.editMode = pVerbindungsartUUID != null;
    console.log("pVerbindungsartUUID:"+pVerbindungsartUUID + " editMode:"+this.editMode);
    if (pVerbindungsartUUID != null) {
      this.verbindungsartUUID = pVerbindungsartUUID;
    } else {
      this.verbindungsartUUID = '';
      this.verbindungsartLoaded = VerbindungsartFactory.empty();
    }
    this.initForm();
  }

  private initForm() {
    this.ds.getVerbindungsarten().subscribe((res:ListItem[]) => this.verbindungsarten = res);

    if (this.editMode) {
      this.ds.getVerbindungsart(this.verbindungsartUUID).subscribe(t => {
        this.verbindungsartLoaded = t;
        this.verbindungsartForm.patchValue(t);
      });
    }

  }

  submitForm() {
    const formValue = this.verbindungsartForm.value;

    if (this.editMode) {
      const verbindungsart: ListItem = {...formValue, version: this.verbindungsartLoaded.version, id: this.verbindungsartLoaded.id};
      this.ds.updateVerbindungsart(verbindungsart).subscribe(() => {
        this.router.navigate(['/verbindungsart/', verbindungsart.id]);
      });
    } else {
      const verbindungsart: ListItem = {...formValue};
      this.ds.createVerbindungsart(verbindungsart).subscribe(t => {
        this.router.navigate(['/verbindungsart/', t.id]);
      });
    }
  }

  onNeu() {
    this.router.navigate(['/verbindungsart/']);
  }

  onDel() {
    if (this.editMode) {
      this.ds.deleteVerbindungsart(this.verbindungsartUUID).subscribe(() => {
        this.router.navigate(['/verbindungsart/'])
      });
    }
  }
}
