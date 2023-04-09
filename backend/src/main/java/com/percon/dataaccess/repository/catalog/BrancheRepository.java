package com.percon.dataaccess.repository.catalog;

import java.util.List;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.percon.dataaccess.model.catalog.Branche;


@Repository
public interface BrancheRepository extends CrudRepository<Branche, UUID> {
    List<Branche> findAll();
}
