package com.percon.dataaccess.model;

import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Version;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Verbindungsart {

  @GeneratedValue @Id
  private UUID id;

  @Version
  private int version;

  @Column(length = 25)
  private String bezeichnung;

  public Verbindungsart() {
  }

}
