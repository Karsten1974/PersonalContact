package com.percon.presentation.endpoint;

import com.percon.dataaccess.model.Branche;
import com.percon.dataaccess.model.Contact;
import com.percon.presentation.dto.ContactCreateView;
import com.percon.presentation.dto.ContactView;
import com.percon.service.IBrancheService;
import com.percon.service.IContactService;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.percon.presentation.mapper.ContactMapper;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ContactController {
    
    @Autowired
    private IContactService contactService;
    
    @Autowired
    private IBrancheService brancheService;
    
    @GetMapping("contacts")
    public List<ContactView> getContacts() {
        List<ContactView> viewList = new ArrayList<ContactView>();
        
        List<Contact> contactList = contactService.getContact();
        contactList.stream().map(t -> ContactMapper.INSTANCE.toView(t)).forEach(viewList::add);
        
        return viewList;
    }
    
    @PostMapping(path = "contact", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ContactView create(@Valid @RequestBody ContactCreateView view) {
        Contact contact = ContactMapper.INSTANCE.toEntity(view);
        
        Branche branche = brancheService.load(view.getBrancheUUID());
        if (branche != null) {
            contact.setBranche(branche);
        }
        
        return ContactMapper.INSTANCE.toView(contactService.save(contact));
    }
    
    @PutMapping("contact")
    public void update(@Valid @RequestBody ContactView view) {
        Contact contact = contactService.load(view.getId());
        if (contact != null) {
            Contact cct = ContactMapper.INSTANCE.toEntity(view);
                    
            Branche branche = brancheService.load(view.getBrancheUUID());
            if (branche != null) {
                cct.setBranche(branche);
            }
            
            contactService.save(cct);
        }
    }
    
    @GetMapping("contact/{contactID}")
    public ContactView getContact(@PathVariable(name = "contactID", required = true) UUID contactID) {
        Contact contact = contactService.load(contactID);
        if (contact != null) {
            return ContactMapper.INSTANCE.toView(contact);
        }
        
        return null;
    }

}
