package com.percon.dataaccess.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import com.percon.dataaccess.model.Verbindung;

public interface VerbindungRepository extends CrudRepository<Verbindung, UUID> {

}
