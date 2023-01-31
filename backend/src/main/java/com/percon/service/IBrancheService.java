package com.percon.service;

import java.util.List;
import java.util.UUID;

import com.percon.data.Branche;

public interface IBrancheService {
    Branche save(Branche branche);
    Branche load(UUID id);
    void delete(Long id);
    Branche findByBrancheUUID(UUID brancheUUID);
    List<Branche> getBranche();
}
