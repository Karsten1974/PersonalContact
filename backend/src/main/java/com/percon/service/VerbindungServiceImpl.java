package com.percon.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.percon.dataaccess.model.Verbindung;
import com.percon.dataaccess.repository.VerbindungRepository;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class VerbindungServiceImpl implements IVerbindungService {
    
    @NonNull
    private VerbindungRepository verbindungRepository;

    @Override
    public Verbindung save(Verbindung verbindung) {
        return verbindungRepository.save(verbindung);
    }

    @Override
    public Verbindung load(UUID id) {
        Verbindung verbindung = null;
        
        Optional<Verbindung> optVerbindung = verbindungRepository.findById(id);
        if (optVerbindung.isPresent()) {
            verbindung = optVerbindung.get();
        }
        
        return verbindung;
    }

    @Override
    public void delete(UUID id) {
        verbindungRepository.deleteById(id);
    }

    @Override
    public List<Verbindung> getVerbindungen() {
        List<Verbindung> list = new ArrayList<Verbindung>();
        
        verbindungRepository.findAll().forEach(list::add);
        
        return list;
    }

}
