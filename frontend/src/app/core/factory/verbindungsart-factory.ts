import { ListItem } from '../../shared/data';

export class VerbindungsartFactory {

  static empty(): ListItem {
    return {
      version: 0,
      id: '',
      bezeichnung: ''
    };
  }
}
