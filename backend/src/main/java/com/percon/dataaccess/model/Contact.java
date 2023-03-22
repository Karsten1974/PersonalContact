package com.percon.dataaccess.model;

import java.util.LinkedHashSet;
import java.util.Set;
import java.util.UUID;

import javax.persistence.*;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class Contact {

    @GeneratedValue @Id
    private UUID id;

    @Version
    private int version;
    
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name="branche_uuid")
    private Branche branche;

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
    private Adresse adresse;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "contact")
    private Set<Verbindung> verbindungen = new LinkedHashSet<>();;
}
