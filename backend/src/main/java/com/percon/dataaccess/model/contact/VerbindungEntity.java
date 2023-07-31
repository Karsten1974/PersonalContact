package com.percon.dataaccess.model.contact;

import java.util.UUID;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.percon.dataaccess.enumeration.VerbindungsartEnum;
import lombok.Getter;
import lombok.Setter;

@Entity(name="verbindung")
@Getter
@Setter
public class VerbindungEntity {

    @GeneratedValue
    @Id
    private UUID id;

    @Version
    private int version;

    @ManyToOne(fetch = FetchType.LAZY)
    private ContactEntity contact;

    @NotNull
    @Enumerated(EnumType.STRING)
    private VerbindungsartEnum verbindungsart;
    
    private int reihenfolge;

    @Size(max = 50)
    @Column(length = 50)
    private String verbindungsdaten;
}
