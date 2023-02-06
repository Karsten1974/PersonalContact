package com.percon.presentation.mapper;

import com.percon.dataaccess.model.Verbindungsart;
import com.percon.presentation.dto.VerbindungsartCreateView;
import com.percon.presentation.dto.VerbindungsartView;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface VerbindungsartMapper {

  VerbindungsartMapper INSTANCE = Mappers.getMapper(VerbindungsartMapper.class);

  VerbindungsartView toView(Verbindungsart verbindungsart);

  Verbindungsart toEntity(VerbindungsartCreateView view);

  Verbindungsart toEntity(VerbindungsartView view);
}
