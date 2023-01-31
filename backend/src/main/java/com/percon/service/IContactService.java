package com.percon.service;

import java.util.List;
import java.util.UUID;

import com.percon.data.Contact;

public interface IContactService {
    Contact save(Contact contact);
    Contact load(UUID id);
    List<Contact> getContact();
}
