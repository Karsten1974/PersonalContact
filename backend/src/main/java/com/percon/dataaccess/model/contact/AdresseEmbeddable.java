package com.percon.dataaccess.model.contact;

import java.util.Objects;
import javax.persistence.*;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class AdresseEmbeddable {

  @Size(max = 50)
  @Column(length = 50)
  private String strasse;

  @Size(min = 5, max = 5)
  @Column(length = 5, nullable = true)
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
    final AdresseEmbeddable adresseEmbeddable = (AdresseEmbeddable) o;
    return plz.equals(adresseEmbeddable.plz) && strasse.equals(adresseEmbeddable.strasse);
  }

  @Override
  public int hashCode() {
    return Objects.hash(plz+strasse);
  }
}
