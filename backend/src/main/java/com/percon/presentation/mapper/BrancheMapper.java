package com.percon.presentation.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.percon.dataaccess.model.Branche;
import com.percon.presentation.dto.BrancheCreateView;
import com.percon.presentation.dto.BrancheView;

@Mapper(componentModel = "spring")
public interface BrancheMapper {
    
    BrancheMapper INSTANCE = Mappers.getMapper(BrancheMapper.class);

    BrancheView toView(Branche branche);

    Branche toEntity(BrancheCreateView view);

    Branche toEntity(BrancheView view);
}
