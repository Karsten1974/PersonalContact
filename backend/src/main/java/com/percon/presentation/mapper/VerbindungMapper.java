package com.percon.presentation.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.percon.dataaccess.model.Verbindung;
import com.percon.presentation.dto.VerbindungCreateView;
import com.percon.presentation.dto.VerbindungView;

@Mapper(componentModel = "spring")
public interface VerbindungMapper {
    
    VerbindungMapper INSTANCE = Mappers.getMapper(VerbindungMapper.class);
    
    VerbindungView toView(Verbindung verbindung);

    Verbindung toEntity(VerbindungCreateView view);

    Verbindung toEntity(VerbindungView view);
}
