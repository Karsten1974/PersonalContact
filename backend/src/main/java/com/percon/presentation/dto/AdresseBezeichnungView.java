package com.percon.presentation.dto;

import java.util.UUID;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdresseBezeichnungView {

  private int version;
  private UUID id;
  private String bezeichnung;

  public AdresseBezeichnungView(final int version, final UUID id, final String bezeichnung) {
    this.version = version;
    this.id = id;
    this.bezeichnung = bezeichnung;
  }
}
