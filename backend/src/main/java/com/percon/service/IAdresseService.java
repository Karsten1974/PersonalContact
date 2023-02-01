package com.percon.service;

import com.percon.dataaccess.model.Adresse;
import java.util.List;
import java.util.UUID;

public interface IAdresseService {
  Adresse save(Adresse adresse);
  Adresse load(UUID id);
  List<Adresse> getAdressen();
}
