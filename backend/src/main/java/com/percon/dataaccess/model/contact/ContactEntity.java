package com.percon.dataaccess.model.contact;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.Size;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.UUID;


@Entity(name="contact")
@Getter
@Setter
public class ContactEntity {

    @GeneratedValue @Id
    private UUID id;

    @Version
    private int version;

    @Size(min = 2, max = 2)
    @Column(length = 2, nullable = true)
    private String brancheFachCode;

    @Size(max = 15)
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

    @Valid
    @Embedded
    private AdresseEmbeddable adresse;

    @Valid
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "contact", orphanRemoval = true)
    private Set<VerbindungEntity> verbindungen = new LinkedHashSet<>();;
}
