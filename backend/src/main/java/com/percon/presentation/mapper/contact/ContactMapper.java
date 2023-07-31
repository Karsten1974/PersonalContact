package com.percon.presentation.mapper.contact;

import com.percon.dataaccess.model.contact.ContactEntity;
import com.percon.dataaccess.model.contact.VerbindungEntity;
import com.percon.presentation.dto.contact.ContactCreateDto;
import com.percon.presentation.dto.contact.ContactDto;
import com.percon.presentation.dto.contact.VerbindungDto;
import org.mapstruct.*;

import java.util.Set;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true), uses = VerbindungMapper.class)
public interface ContactMapper {
    
    @Mapping(source = "adresse.strasse", target = "strasse")
    @Mapping(source = "adresse.plz", target = "plz")
    @Mapping(source = "adresse.ort", target = "ort")
    ContactDto toDto(ContactEntity contactEntity);

    ContactEntity toEntity(ContactCreateDto dto);

    @Mapping(source = "strasse", target = "adresse.strasse")
    @Mapping(source = "plz", target = "adresse.plz")
    @Mapping(source = "ort", target = "adresse.ort")
    ContactEntity toEntity(ContactDto view);

    @AfterMapping
    default void toEntity(@MappingTarget ContactEntity contact, ContactDto dto) {
        if (contact.getVerbindungen() != null) {
            contact.getVerbindungen().forEach(verbindung -> verbindung.setContact(contact));
        }
    }

    Set<VerbindungEntity> toEntitysVerbindungSet(Set<VerbindungDto> dtos);

    Set<VerbindungDto> toDtosVerbindungSet(Set<VerbindungEntity> verbindungs);
}
