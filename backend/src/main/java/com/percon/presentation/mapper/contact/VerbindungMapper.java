package com.percon.presentation.mapper.contact;

import org.mapstruct.Builder;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.percon.dataaccess.model.contact.VerbindungEntity;
import com.percon.presentation.dto.contact.VerbindungCreateDto;
import com.percon.presentation.dto.contact.VerbindungDto;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true))
public interface VerbindungMapper {

    VerbindungDto toDto(VerbindungEntity verbindung);

    VerbindungEntity toEntity(VerbindungCreateDto view);

    VerbindungEntity toEntity(VerbindungDto view);
}
