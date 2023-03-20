package com.percon.dataaccess.model;

import java.util.Objects;
import java.util.UUID;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class Adresse {

  @Size(max = 50)
  @Column(length = 50)
  private String strasse;

  @Size(max = 5)
  @Column(length = 5)
  private String plz;

  @Size(max = 50)
  @Column(length = 50)
  private String ort;

  @Override
  public boolean equals(final Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    final Adresse adresse = (Adresse) o;
    return plz.equals(adresse.plz) && strasse.equals(adresse.strasse);
  }

  @Override
  public int hashCode() {
    return Objects.hash(plz+strasse);
  }
}
