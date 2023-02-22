package com.percon.dataaccess.model;

import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

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

    private UUID adrUUID;
    
    private UUID verbUUID;
    
    @Column(length = 50)
    private String name;
    
    @Column(length = 50)
    private String vorname;
    
    @Column(length = 50)
    private String bemerkung;
    
    @Column(length = 50)
    private String todesprio;
    
    @Column(length = 50)
    private String todesBemerkung;
    
    public Contact() {
    }
}
