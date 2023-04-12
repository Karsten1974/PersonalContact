package com.percon.dataaccess.model.contact;

import java.util.LinkedHashSet;
import java.util.Set;
import java.util.UUID;

import javax.persistence.*;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;


@Entity(name="contact")
@Getter
@Setter
public class ContactEntity {

    @GeneratedValue @Id
    private UUID id;

    @Version
    private int version;
    
    @Column(length = 2)
    private String brancheFachCode;

    @Column(length = 15)
    private String brancheBezeichnung;

    @Size(max = 50)
    @Column(length = 50)
    private String name;

    @Size(max = 50)
    @Column(length = 50)
    private String vorname;

    @Size(max = 50)
    @Column(length = 50)
    private String bemerkung;

    @Size(max = 50)
    @Column(length = 50)
    private String todesprio;

    @Size(max = 50)
    @Column(length = 50)
    private String todesBemerkung;

    @Embedded
    private AdresseEmbeddable adresse;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "contact", orphanRemoval = true)
    private Set<VerbindungEntity> verbindungen = new LinkedHashSet<>();;
}
