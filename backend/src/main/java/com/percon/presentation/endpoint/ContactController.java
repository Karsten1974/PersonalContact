package com.percon.presentation.endpoint;

import com.percon.dataaccess.model.Branche;
import com.percon.dataaccess.model.Contact;
import com.percon.presentation.dto.ContactCreateView;
import com.percon.presentation.dto.ContactView;
import com.percon.presentation.mapper.ContactMapper;
import com.percon.service.BrancheService;
import com.percon.service.IContactService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/api/contact")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ContactController {
    
    @Autowired
    private IContactService contactService;
    
    private final @NonNull BrancheService brancheService;
    
    @GetMapping
    public List<ContactView> getContacts() {
        List<ContactView> viewList = new ArrayList<ContactView>();
        
        List<Contact> contactList = contactService.getContact();
        contactList.stream().map(t -> ContactMapper.INSTANCE.toView(t)).forEach(viewList::add);
        
        return viewList;
    }
    
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ContactView create(@Valid @RequestBody ContactCreateView view) {
        Contact contact = ContactMapper.INSTANCE.toEntity(view);
        
        Branche branche = brancheService.findById(view.getBrancheUUID());
        if (branche != null) {
            contact.setBranche(branche);
        }
        
        return ContactMapper.INSTANCE.toView(contactService.save(contact));
    }
    
    @PutMapping
    public void update(@Valid @RequestBody ContactView view) {
        Contact contact = contactService.load(view.getId());
        if (contact != null) {
            Contact cct = ContactMapper.INSTANCE.toEntity(view);
                    
            Branche branche = brancheService.findById(view.getBrancheUUID());
            if (branche != null) {
                cct.setBranche(branche);
            }
            
            contactService.save(cct);
        }
    }
    
    @GetMapping("/{contactID}")
    public ContactView getContact(@PathVariable(name = "contactID", required = true) UUID contactID) {
        Contact contact = contactService.load(contactID);
        if (contact != null) {
            return ContactMapper.INSTANCE.toView(contact);
        }
        
        return null;
    }

}
