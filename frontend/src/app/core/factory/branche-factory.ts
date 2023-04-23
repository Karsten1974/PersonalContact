import {BrancheDto} from "../../base/generated/models/branche-dto";

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
