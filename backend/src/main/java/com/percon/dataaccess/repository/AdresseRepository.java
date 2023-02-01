package com.percon.dataaccess.repository;

import com.percon.dataaccess.model.Adresse;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdresseRepository extends CrudRepository<Adresse, UUID> {
}
