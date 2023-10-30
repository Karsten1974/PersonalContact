import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BrancheControllerService} from "../../backend-api/services/branche-controller.service";
import {BrancheDto} from "../../backend-api/models/branche-dto";
import {BrancheCreateDto} from "../../backend-api/models/branche-create-dto";

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
    this.convertFachcode(branche);
    return this.bs.create1({body: branche});
  }

  updateBranche(branche: BrancheDto): Observable<any> {
    this.convertFachcode(branche);
    return this.bs.update1({body: branche});
  }

  deleteBranche(brancheUUID: string): Observable<any> {
    return this.bs.delete1({brancheUUID: brancheUUID});
  }

  convertFachcode(branche: BrancheCreateDto) {
    if (branche.fachCode != null && branche.fachCode != undefined) {
      branche.fachCode = branche.fachCode + branche.bezeichnung;
      branche.fachCode = branche.fachCode.substring(0,2);
    } else {
      branche.fachCode = branche.bezeichnung.substring(0,2);
    }
  }

}
