package com.percon.dataaccess.model.catalog;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Version;

import lombok.Getter;
import lombok.Setter;

@Entity(name="branche")
@Getter
@Setter
public class BrancheEntity {
    
    @GeneratedValue @Id
    private UUID id;
    
    @Version
    private int version;

    @Column(length = 2, unique = true)
    private String fachCode;
    
    @Column(length = 15, unique = true)
    private String bezeichnung;
}