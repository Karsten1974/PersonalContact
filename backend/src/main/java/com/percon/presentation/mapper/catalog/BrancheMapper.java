package com.percon.presentation.mapper.catalog;

import com.percon.dataaccess.model.catalog.BrancheEntity;
import org.mapstruct.Mapper;

import com.percon.presentation.dto.catalog.BrancheCreateDto;
import com.percon.presentation.dto.catalog.BrancheDto;

@Mapper(componentModel = "spring")
public interface BrancheMapper {
    
    BrancheDto toDto(BrancheEntity branche);

    BrancheEntity toEntity(BrancheCreateDto view);

    BrancheEntity toEntity(BrancheDto view);
}
