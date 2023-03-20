package com.percon.dataaccess.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.percon.dataaccess.model.Contact;

@Repository
public interface ContactRepository extends CrudRepository<Contact, UUID> {
    List<Contact> findAll();
}
