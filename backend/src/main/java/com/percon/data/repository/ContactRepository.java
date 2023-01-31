package com.percon.data.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.percon.data.Contact;

@Repository
public interface ContactRepository extends CrudRepository<Contact, UUID> {

}
