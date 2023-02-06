package com.percon.service;

import com.percon.dataaccess.model.Verbindungsart;
import com.percon.dataaccess.repository.VerbindungsartRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class VerbindungsartenServiceImpl implements IVerbindungsartenService {

  @Autowired
  private VerbindungsartRepository verbindungsartRepository;

  @Override
  public Verbindungsart save(Verbindungsart verbindungsart) {
    return verbindungsartRepository.save(verbindungsart);
  }

  @Override
  public Verbindungsart load(UUID id) {
    Verbindungsart verbindungsart = null;

    Optional<Verbindungsart> optVerbindungsarten = verbindungsartRepository.findById(id);
    if (optVerbindungsarten.isPresent()) {
      verbindungsart = optVerbindungsarten.get();
    }

    return verbindungsart;
  }

  @Override
  public void delete(UUID id) {
    verbindungsartRepository.deleteById(id);
  }

  @Override
  public List<Verbindungsart> getVerbindungsarten() {
    List<Verbindungsart> list = new ArrayList<Verbindungsart>();

    verbindungsartRepository.findAll().forEach(list::add);

    return list;
  }
}
