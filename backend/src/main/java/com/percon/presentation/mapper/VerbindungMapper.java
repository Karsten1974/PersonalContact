package com.percon.presentation.mapper;

import org.mapstruct.Builder;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.percon.dataaccess.model.Verbindung;
import com.percon.presentation.dto.VerbindungCreateDto;
import com.percon.presentation.dto.VerbindungDto;

import java.util.Set;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true))
public interface VerbindungMapper {
    
    VerbindungMapper INSTANCE = Mappers.getMapper(VerbindungMapper.class);
    
    VerbindungDto toView(Verbindung verbindung);

    Verbindung toEntity(VerbindungCreateDto view);

    Verbindung toEntity(VerbindungDto view);
}
