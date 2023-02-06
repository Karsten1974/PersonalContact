package com.percon.dataaccess.repository;

import com.percon.dataaccess.model.Verbindungsart;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VerbindungsartRepository extends CrudRepository<Verbindungsart, UUID> {

}
