package com.percon.presentation.mapper.contact;

import com.percon.dataaccess.model.contact.VerbindungEntity;
import com.percon.presentation.dto.contact.VerbindungDto;
import org.mapstruct.Builder;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true))
public interface VerbindungMapper {

    VerbindungDto toDto(VerbindungEntity verbindung);

    VerbindungEntity toEntity(VerbindungDto view);
}
