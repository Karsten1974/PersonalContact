package com.percon.presentation.dto.contact;

import com.percon.dataaccess.enumeration.Verbindungsart;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;

@Getter
@Setter
public class VerbindungCreateDto {

    private Verbindungsart verbindungsart;

    private int reihenfolge;

    @Size(max = 50)
    private String verbindungsdaten;
}
