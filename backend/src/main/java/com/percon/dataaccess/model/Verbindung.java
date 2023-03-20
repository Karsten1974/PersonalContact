package com.percon.dataaccess.model;

import java.util.UUID;

import javax.persistence.*;
import javax.validation.constraints.Size;

import com.percon.dataaccess.enumeration.Verbindungsart;
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

    @ManyToOne
    private Contact contact;

    @Enumerated(EnumType.STRING)
    private Verbindungsart verbindungsart;
    
    private int reihenfolge;

    @Size(max = 50)
    @Column(length = 50)
    private String verbindungsdaten;
}
