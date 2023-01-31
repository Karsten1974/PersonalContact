package com.percon.rest.transfer;

import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdresseCreateView {

  @NotNull
  private String strasse;

  @NotNull
  private String plz;

  @NotNull
  private String ort;
}
