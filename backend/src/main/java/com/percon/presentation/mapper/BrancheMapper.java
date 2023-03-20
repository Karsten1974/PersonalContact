package com.percon.presentation.mapper;

import org.mapstruct.Mapper;

import com.percon.dataaccess.model.Branche;
import com.percon.presentation.dto.BrancheCreateDto;
import com.percon.presentation.dto.BrancheDto;

@Mapper(componentModel = "spring")
public interface BrancheMapper {
    
    BrancheDto toDto(Branche branche);

    Branche toEntity(BrancheCreateDto view);

    Branche toEntity(BrancheDto view);
}
