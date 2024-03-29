package com.percon.presentation.dto.catalog;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BrancheCreateDto {

    @NotBlank
    @NotNull
    @Size(min = 2, max = 2)
    private String fachCode;
    
    @NotBlank
    @NotNull
    @Size(max = 15)
    private String bezeichnung;
}
