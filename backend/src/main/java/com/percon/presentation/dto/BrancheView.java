package com.percon.presentation.dto;

import java.util.UUID;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BrancheView extends BrancheCreateView {

    private int version;

    @NotNull
    private UUID id;
}
