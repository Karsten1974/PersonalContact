package com.percon.data.repository;

import com.percon.data.Adresse;
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdresseRepository extends CrudRepository<Adresse, UUID> {
}
