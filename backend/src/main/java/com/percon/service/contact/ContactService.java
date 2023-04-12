package com.percon.service.contact;

import com.percon.dataaccess.model.contact.ContactEntity;
import com.percon.dataaccess.repository.contact.ContactRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ContactService {
    
    private final @NonNull ContactRepository contactRepository;

    public ContactEntity attach(ContactEntity contact) {
        var attachContact = contactRepository.save(contact);
        return attachContact;
    }

    public Optional<ContactEntity> findById(UUID id) {
        return contactRepository.findById(id);
    }

    public Iterable<ContactEntity> findAll() {
        return contactRepository.findAll();
    }

    public void delete(UUID id) {
        contactRepository.deleteById(id);
    }
}
