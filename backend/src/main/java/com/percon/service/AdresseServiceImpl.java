package com.percon.service;

import com.percon.data.Adresse;
import com.percon.data.repository.AdresseRepository;
import java.util.ArrayList;
import java.util.List;
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
  public List<Adresse> getAdressen() {
    List<Adresse> list = new ArrayList<Adresse>();

    adresseRepository.findAll().forEach(list::add);

    return list;
  }
}
