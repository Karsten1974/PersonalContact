package com.percon.dataaccess.repository.contact;

import com.percon.dataaccess.model.contact.ContactEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ContactRepository extends CrudRepository<ContactEntity, UUID> {
    @Query(value = "SELECT ct FROM #{#entityName} ct WHERE ct.name like (%:search%) or ct.vorname like (%:search%) " +
            "or ct.adresse.strasse like (%:search%) or ct.adresse.ort like (%:search%)")
    Optional<Iterable<ContactEntity>> findBySearch(@Param("search") String strSearch);
}
