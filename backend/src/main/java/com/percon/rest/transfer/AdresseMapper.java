package com.percon.rest.transfer;

import com.percon.data.Adresse;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface AdresseMapper {

  AdresseMapper INSTANCE = Mappers.getMapper(AdresseMapper.class);

  AdresseView toView(Adresse adresse);

  Adresse toEntity(AdresseCreateView view);

  Adresse toEntity(AdresseView view);
}
