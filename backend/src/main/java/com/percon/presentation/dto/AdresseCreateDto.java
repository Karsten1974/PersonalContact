package com.percon.presentation.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdresseCreateDto {

  @NotBlank
  @Size(max = 50)
  private String strasse;

  @NotNull
  private String plz;

  @NotNull
  private String ort;
}
