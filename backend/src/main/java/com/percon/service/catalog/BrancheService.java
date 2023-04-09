package com.percon.service.catalog;

import com.percon.dataaccess.model.catalog.Branche;
import com.percon.dataaccess.repository.catalog.BrancheRepository;

import java.util.List;
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
public class BrancheService {

    private final @NonNull BrancheRepository brancheRepository;

    public Branche attach(Branche branche) {
        var attachBranche = brancheRepository.save(branche);
        return attachBranche;
    }

    public @NotNull Branche findById(UUID id) {
        return brancheRepository.findById(id).orElseThrow();
    }

    public void delete(UUID id) {
        brancheRepository.deleteById(id);
    }

    public List<Branche> findAll() {
        return brancheRepository.findAll();
    }

}
