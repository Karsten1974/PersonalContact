package com.percon.presentation.mapper;

import com.percon.dataaccess.model.Adresse;
import com.percon.presentation.dto.AdresseCreateDto;
import com.percon.presentation.dto.AdresseDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface AdresseMapper {

  AdresseMapper INSTANCE = Mappers.getMapper(AdresseMapper.class);

  AdresseDto toView(Adresse adresse);

  Adresse toEntity(AdresseCreateDto view);

  Adresse toEntity(AdresseDto view);
}
