package com.percon.presentation.dto.contact;

import com.percon.dataaccess.enumeration.VerbindungsartEnum;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.UUID;

@Getter
@Setter
public class VerbindungDto {
    
    private int version;

    private UUID id;

    @NotNull
    private VerbindungsartEnum verbindungsart;

    private int reihenfolge;

    @Size(max = 50)
    private String verbindungsdaten;
}
