package com.percon.service;

import com.percon.dataaccess.model.Adresse;
import com.percon.dataaccess.repository.AdresseRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AdresseServiceImpl implements IAdresseService {

  @Autowired
  AdresseRepository adresseRepository;

  @Override
  public Adresse save(Adresse adresse) {
    return adresseRepository.save(adresse);
  }

  @Override
  public Adresse load(UUID id) {
    Adresse adresse = null;

    Optional<Adresse> optAdr = adresseRepository.findById(id);
    if (optAdr.isPresent()) {
      adresse = optAdr.get();
    }

    return adresse;
  }

  @Override
  public List<Adresse> getAdressen() {
    List<Adresse> list = new ArrayList<Adresse>();

    adresseRepository.findAll().forEach(list::add);

    return list;
  }
}
