package com.percon.dataaccess.repository.catalog;

import java.util.Optional;
import java.util.UUID;

import com.percon.dataaccess.model.catalog.BrancheEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BrancheRepository extends CrudRepository<BrancheEntity, UUID> {
    Optional<BrancheEntity> findByFachCode(String fachCode);
}
