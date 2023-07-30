import {BrancheDto} from "../../backend-api/models/branche-dto";

export class BrancheFactory {

  static empty(): BrancheDto {
    return {
      version: 0,
      id: '',
      bezeichnung: '',
      fachCode: ''
    };
  }
}
