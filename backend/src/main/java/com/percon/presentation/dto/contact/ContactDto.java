package com.percon.presentation.dto.contact;

import java.util.LinkedHashSet;
import java.util.Set;
import java.util.UUID;

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

    @Size(max = 5)
    private String plz;

    @Size(max = 50)
    private String ort;

    private Set<VerbindungDto> verbindungen = new LinkedHashSet<>();
}
