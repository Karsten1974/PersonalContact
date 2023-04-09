package com.percon.presentation.endpoint.contact;

import com.percon.dataaccess.model.catalog.Branche;
import com.percon.dataaccess.model.contact.Contact;
import com.percon.presentation.dto.contact.ContactCreateDto;
import com.percon.presentation.dto.contact.ContactDto;
import com.percon.presentation.mapper.contact.ContactMapper;
import com.percon.service.catalog.BrancheService;
import com.percon.service.contact.ContactService;
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
    
    private final @NonNull ContactService contactService;
    
    private final @NonNull BrancheService brancheService;

    private final @NonNull ContactMapper mapper;
    
    @GetMapping
    public List<ContactDto> getContacts() {
        List<ContactDto> viewList = new ArrayList<ContactDto>();
        
        List<Contact> contactList = contactService.findAll();
        contactList.stream().map(t -> mapper.toDto(t)).forEach(viewList::add);
        
        return viewList;
    }
    
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
    public @Valid UUID create(@Valid @RequestBody ContactCreateDto dto) {
        Contact contact = mapper.toEntity(dto);
        
        Branche branche = brancheService.findById(dto.getBrancheUUID());
        if (branche != null) {
            contact.setBranche(branche);
        }
        
        return contactService.attach(contact).getId();
    }
    
    @PutMapping
    public void update(@Valid @RequestBody ContactDto dto) {
        Contact contact = contactService.findById(dto.getId());
        if (contact != null) {
            Contact cct = mapper.toEntity(dto);
                    
            Branche branche = brancheService.findById(dto.getBrancheUUID());
            if (branche != null) {
                cct.setBranche(branche);
            }
            
            contactService.attach(cct);
        }
    }
    
    @GetMapping("/{contactID}")
    public ContactDto getContact(@PathVariable(name = "contactID", required = true) UUID contactID) {
        Contact contact = contactService.findById(contactID);
        if (contact != null) {
            return mapper.toDto(contact);
        }
        
        return null;
    }

}
