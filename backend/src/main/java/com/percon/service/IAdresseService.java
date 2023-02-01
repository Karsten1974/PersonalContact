package com.percon.service;

import com.percon.dataaccess.model.Adresse;
import java.util.List;

public interface IAdresseService {
  Adresse save(Adresse adresse);
  List<Adresse> getAdressen();
}
