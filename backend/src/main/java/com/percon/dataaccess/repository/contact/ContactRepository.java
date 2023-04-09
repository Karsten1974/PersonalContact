package com.percon.dataaccess.repository.contact;

import java.util.List;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.percon.dataaccess.model.contact.Contact;

@Repository
public interface ContactRepository extends CrudRepository<Contact, UUID> {
    List<Contact> findAll();
}
