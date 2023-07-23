package com.percon.presentation.dto.contact;

import java.util.UUID;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactCreateDto {

    @NotBlank
    @NotNull
    @Size(min = 2, max = 2)
    private String brancheFachCode;

    @NotBlank
    @NotNull
    @Size(max = 15)
    private String brancheBezeichnung;

    @Size(max = 50)
    private String name;

    @Size(max = 50)
    private String vorname;
}
