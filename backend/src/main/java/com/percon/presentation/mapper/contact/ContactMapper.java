package com.percon.presentation.mapper.contact;

import com.percon.dataaccess.model.contact.Contact;
import com.percon.dataaccess.model.contact.Verbindung;
import com.percon.presentation.dto.contact.ContactCreateDto;
import com.percon.presentation.dto.contact.ContactDto;
import com.percon.presentation.dto.contact.VerbindungDto;
import com.percon.presentation.mapper.VerbindungMapper;
import org.mapstruct.*;

import java.util.Set;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true), uses = VerbindungMapper.class)
public interface ContactMapper {
    
    @Mapping(source = "adresse.strasse", target = "strasse")
    @Mapping(source = "adresse.plz", target = "plz")
    @Mapping(source = "adresse.ort", target = "ort")
    ContactDto toDto(Contact contact);

    Contact toEntity(ContactCreateDto dto);

    @Mapping(source = "strasse", target = "adresse.strasse")
    @Mapping(source = "plz", target = "adresse.plz")
    @Mapping(source = "ort", target = "adresse.ort")
    Contact toEntity(ContactDto view);
    
    @AfterMapping
    default void toDto(@MappingTarget ContactDto dto, Contact contact) {
        dto.setBrancheUUID(contact.getBranche().getId());
        dto.setVerbindungen(toDtosVerbindungSet(contact.getVerbindungen()));
    }

    @AfterMapping
    default void toEntity(@MappingTarget Contact contact, ContactDto dto) {
        contact.setVerbindungen(toEntitysVerbindungSet(dto.getVerbindungen()));
        if (contact.getVerbindungen() != null) {
            contact.getVerbindungen().forEach(verbindung -> verbindung.setContact(contact));
        }
    }

    Set<Verbindung> toEntitysVerbindungSet(Set<VerbindungDto> dtos);

    Set<VerbindungDto> toDtosVerbindungSet(Set<Verbindung> verbindungs);
}