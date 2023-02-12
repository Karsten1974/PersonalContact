package com.percon.presentation.dto;

import java.util.UUID;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VerbindungView extends VerbindungCreateView  {
    
    private int version;

    @NotNull
    private UUID id;

    public VerbindungView() {
    }
}
