package com.percon.presentation.mapper.catalog;

import org.mapstruct.Mapper;

import com.percon.dataaccess.model.catalog.Branche;
import com.percon.presentation.dto.catalog.BrancheCreateDto;
import com.percon.presentation.dto.catalog.BrancheDto;

@Mapper(componentModel = "spring")
public interface BrancheMapper {
    
    BrancheDto toDto(Branche branche);

    Branche toEntity(BrancheCreateDto view);

    Branche toEntity(BrancheDto view);
}
