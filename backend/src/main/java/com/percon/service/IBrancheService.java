package com.percon.service;

import java.util.List;
import java.util.UUID;

import com.percon.dataaccess.model.Branche;

public interface IBrancheService {
    Branche save(Branche branche);
    Branche load(UUID id);
    void delete(UUID id);
    Branche findByBrancheUUID(UUID brancheUUID);
    List<Branche> getBranche();
}
