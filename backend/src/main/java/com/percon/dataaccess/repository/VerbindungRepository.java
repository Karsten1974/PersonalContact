package com.percon.dataaccess.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import com.percon.dataaccess.model.Verbindung;
import org.springframework.stereotype.Repository;

@Repository
public interface VerbindungRepository extends CrudRepository<Verbindung, UUID> {

}
