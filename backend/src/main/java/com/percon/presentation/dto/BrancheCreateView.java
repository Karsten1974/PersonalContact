package com.percon.presentation.dto;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BrancheCreateView {
    
    @NotNull
    private String bezeichnung;
}
