package com.percon.presentation.mapper;

import com.percon.dataaccess.model.Contact;
import com.percon.presentation.dto.ContactCreateDto;
import com.percon.presentation.dto.ContactDto;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ContactMapper {
    
    @Mapping(source = "adresse.strasse", target = "strasse")
    @Mapping(source = "adresse.plz", target = "plz")
    @Mapping(source = "adresse.ort", target = "ort")
    ContactDto toDto(Contact contact);

    Contact toEntity(ContactCreateDto view);

    @Mapping(source = "strasse", target = "adresse.strasse")
    @Mapping(source = "plz", target = "adresse.plz")
    @Mapping(source = "ort", target = "adresse.ort")
    Contact toEntity(ContactDto view);
    
    @AfterMapping
    default void toDto(@MappingTarget ContactDto view, Contact contact) {
        view.setBrancheUUID(contact.getBranche().getId());
    }
}
