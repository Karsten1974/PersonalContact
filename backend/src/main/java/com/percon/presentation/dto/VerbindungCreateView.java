package com.percon.presentation.dto;

import java.util.UUID;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VerbindungCreateView {
    
    @NotNull
    private UUID verbindungsdatenArtUUID;

    private int reihenfolge;
    
    private String verbindungsdaten;
    
    public VerbindungCreateView() {
    }
}
