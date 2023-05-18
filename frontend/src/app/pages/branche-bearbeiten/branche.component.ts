import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrancheService } from '../../backend-api/branche.service';
import { BrancheFactory } from '../../core/factory/branche-factory';
import {BrancheDto} from "../../base/generated/models/branche-dto";
import {BrancheCreateDto} from "../../base/generated/models/branche-create-dto";

@Component({
  selector: 'branche',
  templateUrl: './branche.component.html',
  styleUrls: ['./branche.component.css']
})
export class BrancheComponent implements OnInit {
  branchenForm: FormGroup = this.fb.group({
    bezeichnung: ['']
  });

  brancheLoaded: BrancheDto = BrancheFactory.empty();

  branchen: BrancheDto[] = [];

  brancheUUID: string = '';
  editMode = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private ds: BrancheService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    let pBrancheUUID = params.get('brancheUUID');
    this.editMode = pBrancheUUID != null;
    console.log("pBrancheUUID:"+pBrancheUUID + " editMode:"+this.editMode);
    if (pBrancheUUID != null) {
      this.brancheUUID = pBrancheUUID;
    } else {
      this.brancheUUID = '';
      this.brancheLoaded = BrancheFactory.empty();
    }
    this.initForm();
  }

  private initForm() {
    this.ds.getBranchen().subscribe(res => this.branchen = res);

    if (this.editMode) {
      this.ds.getBranche(this.brancheUUID).subscribe(t => {
        this.brancheLoaded = t;
        this.branchenForm.patchValue(t);
      });
    }

  }

  submitForm() {
    const formValue = this.branchenForm.value;

    if (this.editMode) {
      const branche: BrancheDto = {...formValue, version: this.brancheLoaded.version, id: this.brancheLoaded.id};
      this.ds.updateBranche(branche).subscribe(() => {
        this.router.navigate(['/branche/', branche.id]);
      });
    } else {
      const branche: BrancheCreateDto = {...formValue};
      this.ds.createBranche(branche).subscribe(t => {
        this.router.navigate(['/branche/', t]);
      });
    }
  }

  onNeu() {
    this.router.navigate(['/branchen/']);
  }

  onDel() {
    if (this.editMode) {
      this.ds.deleteBranche(this.brancheUUID).subscribe(() => {
        this.router.navigate(['/branchen/'])
      });
    }
  }

  onZurueck() {
    this.router.navigate(['/verwalten']);
  }
}
