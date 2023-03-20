package com.percon.dataaccess.enumeration;

import lombok.Getter;
@Getter
public enum Verbindungsart {
    TELEFON("Telefon"),
    MOBIL("Mobil"),
    EMAIL("eMail")
    ;

    private String art;

    Verbindungsart(String art) {
        this.art = art;
    }
}
