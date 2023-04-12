package com.percon.dataaccess.repository.contact;

import java.util.List;
import java.util.UUID;

import com.percon.dataaccess.model.contact.ContactEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends CrudRepository<ContactEntity, UUID> {
}
