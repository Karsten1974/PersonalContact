package com.percon.presentation.dto;

import java.util.UUID;

import javax.validation.constraints.NotNull;

import com.percon.dataaccess.enumeration.Verbindungsart;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VerbindungCreateView {
    
    @NotNull
    private UUID verbindungsdatenArtUUID;

    private Verbindungsart verbindungsart;

    private int reihenfolge;
    
    private String verbindungsdaten;
    
    public VerbindungCreateView() {
    }
}
