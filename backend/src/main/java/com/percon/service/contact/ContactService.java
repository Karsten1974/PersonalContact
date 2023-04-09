package com.percon.service.contact;

import com.percon.dataaccess.model.contact.Contact;
import com.percon.dataaccess.repository.contact.ContactRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ContactService {
    
    private final @NonNull ContactRepository contactRepository;

    public Contact attach(Contact contact) {
        var attachContact = contactRepository.save(contact);
        return attachContact;
    }

    public @NotNull Contact findById(UUID id) {
        return contactRepository.findById(id).orElseThrow();
    }

    public List<Contact> findAll() {
        return contactRepository.findAll();
    }
    
}
