package com.percon.dataaccess.model;

import java.util.Objects;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Version;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Adresse {

  @GeneratedValue
  @Id
  private UUID id;

  @Version
  private int version;

  @NotBlank
  @Size(max = 50)
  @Column(length = 50, nullable = false)
  private String strasse;

  @Size(max = 5)
  @Column(length = 5)
  private String plz;

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
    return id.equals(adresse.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }
}
