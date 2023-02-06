package com.percon.service;

import com.percon.dataaccess.model.Verbindungsart;
import java.util.List;
import java.util.UUID;

public interface IVerbindungsartenService {
  Verbindungsart save(Verbindungsart verbindungsart);
  Verbindungsart load(UUID id);
  void delete(UUID id);
  List<Verbindungsart> getVerbindungsarten();
}
