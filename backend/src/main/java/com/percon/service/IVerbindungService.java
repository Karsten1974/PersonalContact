package com.percon.service;

import java.util.List;
import java.util.UUID;

import com.percon.dataaccess.model.contact.Verbindung;

public interface IVerbindungService {
    Verbindung save(Verbindung verbindung);
    Verbindung load(UUID id);
    void delete(UUID id);
    List<Verbindung> getVerbindungen();
}
