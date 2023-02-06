import { ListItem } from '../../shared/data';

export class BrancheFactory {

  static empty(): ListItem {
    return {
      version: 0,
      id: '',
      bezeichnung: ''
    };
  }
}
