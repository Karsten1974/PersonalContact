package com.percon.presentation.dto.contact;

import java.util.LinkedHashSet;
import java.util.Set;
import java.util.UUID;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactDto extends ContactCreateDto {

    private int version;

    @NotNull
    private UUID id;

    @Size(max = 50)
    private String bemerkung;

    @Size(max = 50)
    private String todesprio;

    @Size(max = 50)
    private String todesBemerkung;

    @Size(max = 50)
    private String strasse;

    @Size(min = 5, max = 5)
    @Min(value = 1000) @Max(value = 99999)
    private String plz;

    @Size(max = 50)
    private String ort;

    @Valid
    private Set<VerbindungDto> verbindungen = new LinkedHashSet<>();
}
