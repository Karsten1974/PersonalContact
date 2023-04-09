package com.percon.presentation.dto.catalog;

import java.util.UUID;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BrancheDto extends BrancheCreateDto {

    private int version;

    @NotNull
    private UUID id;
}
