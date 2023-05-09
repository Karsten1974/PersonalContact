import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BrancheControllerService} from "../base/generated/services/branche-controller.service";
import {BrancheDto} from "../base/generated/models/branche-dto";
import {BrancheCreateDto} from "../base/generated/models/branche-create-dto";

@Injectable({
  providedIn: 'root'
})
export class BrancheService {
  constructor(private bs: BrancheControllerService) { }

  getBranchen(): Observable<BrancheDto[]> {
    return this.bs.getBranchen();
  }

  getBranche(brancheUUID: string): Observable<BrancheDto> {
    return this.bs.getBranche(  {brancheUUID: brancheUUID});
  }

  getBrancheByFachCode(fachCode: string): Observable<BrancheDto> {
    return this.bs.getBrancheByFachCode(  {fachCode: fachCode});
  }

  createBranche(branche: BrancheCreateDto): Observable<string> {
    let myBranche = {...branche, fachCode: branche.bezeichnung.substring(0,2)};
    return this.bs.create1({body: myBranche});
  }

  updateBranche(branche: BrancheDto): Observable<any> {
    let myBranche = {...branche, fachCode: branche.bezeichnung.substring(0,2)};
    return this.bs.update1({body: myBranche});
  }

  deleteBranche(brancheUUID: string): Observable<any> {
    return this.bs.delete1({brancheUUID: brancheUUID});
  }

}
