package com.percon.dataaccess.model.catalog;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.UUID;

@Entity(name="branche")
@Getter
@Setter
public class BrancheEntity {
    
    @GeneratedValue @Id
    private UUID id;
    
    @Version
    private int version;

    @Size(min = 2, max = 2)
    @Column(length = 2, unique = true, nullable = false)
    private String fachCode;

    @Size(max = 15)
    @Column(length = 15, unique = true, nullable = false)
    private String bezeichnung;
}
