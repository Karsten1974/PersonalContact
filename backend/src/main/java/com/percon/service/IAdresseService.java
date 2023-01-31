package com.percon.service;

import com.percon.data.Adresse;
import java.util.List;

public interface IAdresseService {
  Adresse save(Adresse adresse);
  List<Adresse> getAdressen();
}
