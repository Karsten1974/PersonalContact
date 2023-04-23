/* tslint:disable */
/* eslint-disable */
export interface VerbindungDto {
  id: string;
  reihenfolge?: number;
  verbindungsart?: 'TELEFON' | 'MOBIL' | 'EMAIL';
  verbindungsdaten?: string;
  version?: number;
}
