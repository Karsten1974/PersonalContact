package com.percon.presentation.endpoint.contact;

import com.percon.dataaccess.model.contact.ContactEntity;
import com.percon.presentation.dto.contact.ContactCreateDto;
import com.percon.presentation.dto.contact.ContactDto;
import com.percon.presentation.mapper.contact.ContactMapper;
import com.percon.service.contact.ContactService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@Validated
@RequestMapping(value = "/api/contact")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ContactController {
    
    private final @NonNull ContactService contactService;
    
    private final @NonNull ContactMapper mapper;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ContactDto> getContacts() {
        List<ContactDto> viewList = new ArrayList<ContactDto>();
        
        List<ContactEntity> contactList = (List<ContactEntity>) contactService.findAll();
        contactList.stream().map(t -> mapper.toDto(t)).forEach(viewList::add);
        
        return viewList;
    }
    
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = MediaType.APPLICATION_JSON_VALUE)
    public @Valid UUID create(@Valid @RequestBody ContactCreateDto dto) {
        ContactEntity contact = mapper.toEntity(dto);
        
        return contactService.attach(contact).getId();
    }
    
    @PutMapping
    public void update(@Valid @NotNull @RequestBody ContactDto dto) {
        Optional<ContactEntity> contact = contactService.findById(dto.getId());
        if (contact.isPresent()) {
            ContactEntity cct = mapper.toEntity(dto);
                    
            contactService.attach(cct);
        }
    }
    
    @GetMapping(value = "/{contactID}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ContactDto> getContact(@PathVariable(name = "contactID", required = true) UUID contactID) {
        Optional<ContactEntity> contact = contactService.findById(contactID);
        if (contact.isPresent()) {
            return ResponseEntity.ok(mapper.toDto(contact.get()));
        }
        
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{contactID}")
    public void delete(@PathVariable(name = "contactID", required = true) UUID contactID) {
        contactService.delete(contactID);
    }

}
