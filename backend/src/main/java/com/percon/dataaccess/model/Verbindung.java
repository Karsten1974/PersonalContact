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
public class Verbindung {
    
    @GeneratedValue
    @Id
    private UUID id;

    @Version
    private int version;
    
    private UUID verbindungsdatenArtUUID;
    
    private int reihenfolge;

    @Column(length = 50)
    private String verbindungsdaten;
    
    public Verbindung() {
    }
}
