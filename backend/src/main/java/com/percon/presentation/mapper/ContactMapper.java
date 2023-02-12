package com.percon.presentation.mapper;

import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;

import com.percon.dataaccess.model.Contact;
import com.percon.presentation.dto.ContactCreateView;
import com.percon.presentation.dto.ContactView;

@Mapper(componentModel = "spring")
public interface ContactMapper {
    
    ContactMapper INSTANCE = Mappers.getMapper(ContactMapper.class);

    ContactView toView(Contact contact);

    Contact toEntity(ContactCreateView view);

    Contact toEntity(ContactView view);
    
    @AfterMapping
    default void toView(@MappingTarget ContactView view, Contact contact) {
        view.setBrancheUUID(contact.getBranche().getId());
    }
}
