import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrancheService } from '../../shared/service/branche.service';
import { BrancheFactory } from '../../core/factory/branche-factory';
import {BrancheDto} from "../../backend-api/models/branche-dto";
import {BrancheCreateDto} from "../../backend-api/models/branche-create-dto";

@Component({
  selector: 'branche',
  templateUrl: './branche.component.html',
  styleUrls: ['./branche.component.css']
})
export class BrancheComponent implements OnInit {

  branche: BrancheDto = BrancheFactory.empty();

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
      this.branche = BrancheFactory.empty();
    }
    this.initForm();
  }

  private initForm() {
    this.ds.getBranchen().subscribe(res => this.branchen = res);

    if (this.editMode) {
      this.ds.getBranche(this.brancheUUID).subscribe(t => {
        this.branche = t;
      });
    }

  }

  submitForm() {
    if (this.editMode) {
      const branche: BrancheDto = {'version': this.branche.version, 'id': this.branche.id, 'fachCode': this.branche.fachCode, 'bezeichnung': this.branche.bezeichnung};
      this.ds.updateBranche(branche).subscribe(() => {
        this.router.navigate(['/branche/', branche.id]);
      });
    } else {
      const branche: BrancheCreateDto = {'fachCode': this.branche.fachCode, 'bezeichnung': this.branche.bezeichnung}
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
}
