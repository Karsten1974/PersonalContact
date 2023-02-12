package com.percon.presentation.dto;

import java.util.UUID;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactView extends ContactCreateView {

    private int version;

    @NotNull
    private UUID id;
    
    private String bemerkung;
    
    private String todesprio;
    
    private String todesBemerkung;
    
    private UUID adrUUID;
    
    private UUID verbUUID;

    public ContactView() {
    }
}
