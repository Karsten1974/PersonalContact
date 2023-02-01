export interface Data {
}

export interface ListItem {
  version: number;
  id?: string;
  bezeichnung: string
}

export interface AdresseData {
  version: number;
  id?: string;
  strasse: string;
  plz: string;
  ort: string;
}

export interface ContactData {
  version: number;
  id?: string;
  brancheUUID: string;
  adrUUID: string;
  verbUUID?: string;
  name: string;
  vorname: string;
  bemerkung: string;
  todesprio: string;
  todesBemerkung: string;
}
export interface VerbindungsData {
  version: number;
  reihenfolge?: number;
  verbindungsUUID?: string;
  verbindungsdatenArtUUID: string;
  verbindungsdaten: string;
}
