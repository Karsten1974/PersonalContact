/* tslint:disable */
/* eslint-disable */
import { VerbindungDto } from './verbindung-dto';
export interface ContactDto {
  bemerkung?: string;
  brancheBezeichnung: string;
  brancheFachCode: string;
  geburtstag?: string;
  id: string;
  name?: string;
  ort?: string;
  plz?: string;
  strasse?: string;
  todesBemerkung?: string;
  todesprio?: string;
  verbindungen?: Array<VerbindungDto>;
  version?: number;
  vorname?: string;
}
