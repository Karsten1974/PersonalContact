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
public class Branche {
    
    @GeneratedValue @Id
    private UUID id;
    
    @Version
    private int version;

    @Column(length = 2, unique = true)
    private String fachCode;
    
    @Column(length = 25, unique = true)
    private String bezeichnung;
    
    public Branche() {
    }
}
