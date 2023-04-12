package com.percon.service.catalog;

import com.percon.dataaccess.model.catalog.BrancheEntity;
import com.percon.dataaccess.repository.catalog.BrancheRepository;

import java.util.Optional;
import java.util.UUID;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class BrancheService {

    private final @NonNull BrancheRepository brancheRepository;

    public BrancheEntity attach(BrancheEntity branche) {
        var attachBranche = brancheRepository.save(branche);
        return attachBranche;
    }

    public Optional<BrancheEntity> findById(UUID id) {
        return brancheRepository.findById(id);
    }

    public Optional<BrancheEntity> findByFachCode(String fachCode) {
        return brancheRepository.findByFachCode(fachCode);
    }

    public void delete(UUID id) {
        brancheRepository.deleteById(id);
    }

    public Iterable<BrancheEntity> findAll() {
        return brancheRepository.findAll();
    }

}
