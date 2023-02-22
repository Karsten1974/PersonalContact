package com.percon.service;

import com.percon.dataaccess.model.Adresse;
import com.percon.dataaccess.repository.AdresseRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AdresseService {

  private final @NonNull AdresseRepository adresseRepository;

  public Adresse attach(Adresse adresse) {
    var attachedAdresse = adresseRepository.save(adresse);
    return attachedAdresse;
  }

  public @NotNull Adresse findById(UUID id) {
    return adresseRepository.findById(id)
        .orElseThrow();
  }

  public List<Adresse> findAll() {
    return adresseRepository.findAll();
  }
}
