package com.percon.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.percon.dataaccess.model.Contact;
import com.percon.dataaccess.repository.ContactRepository;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ContactServiceImpl implements IContactService {
    
    @Autowired
    private ContactRepository contactRepository;

    /* (non-Javadoc)
     * @see com.percon.service.IContactService#save(com.percon.dataaccess.model.Contact)
     */
    @Override
    public Contact save(Contact contact) {
        return contactRepository.save(contact);
    }

    
    /* (non-Javadoc)
     * @see com.percon.service.IContactService#load(java.util.UUID)
     */
    @Override
    public Contact load(UUID id) {
        Contact contact = null;
        
        Optional<Contact> optTel = contactRepository.findById(id);
        if (optTel.isPresent()) {
            contact = optTel.get();
        }
        
        return contact;
    }

    /* (non-Javadoc)
     * @see com.percon.service.IContactService#getContact()
     */
    @Override
    public List<Contact> getContact() {
        List<Contact> list = new ArrayList<Contact>();
        
        contactRepository.findAll().forEach(list::add);
        
        return list;
    }
    
}
