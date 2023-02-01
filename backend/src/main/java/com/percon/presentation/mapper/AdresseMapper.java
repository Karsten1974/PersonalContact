package com.percon.presentation.mapper;

import com.percon.dataaccess.model.Adresse;
import com.percon.presentation.dto.AdresseCreateView;
import com.percon.presentation.dto.AdresseView;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface AdresseMapper {

  AdresseMapper INSTANCE = Mappers.getMapper(AdresseMapper.class);

  AdresseView toView(Adresse adresse);

  Adresse toEntity(AdresseCreateView view);

  Adresse toEntity(AdresseView view);
}
