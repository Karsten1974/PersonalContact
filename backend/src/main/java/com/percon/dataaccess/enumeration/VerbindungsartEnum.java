package com.percon.dataaccess.enumeration;

import lombok.Getter;
@Getter
public enum VerbindungsartEnum {
    TELEFON("Telefon"),
    MOBIL("Mobil"),
    EMAIL("eMail")
    ;

    private String art;

    VerbindungsartEnum(String art) {
        this.art = art;
    }
}
