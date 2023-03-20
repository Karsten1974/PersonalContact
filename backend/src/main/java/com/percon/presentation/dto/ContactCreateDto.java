package com.percon.presentation.dto;

import java.util.UUID;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactCreateDto {
    
    @NotNull
    private UUID brancheUUID;

    @Size(max = 50)
    private String name;

    @Size(max = 50)
    private String vorname;
}
