package com.percon.presentation.dto;

import java.util.UUID;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactCreateView {
    
    @NotNull
    private UUID brancheUUID;
    
    private String name;
    
    private String vorname;
    
    public ContactCreateView() {
    }
}
