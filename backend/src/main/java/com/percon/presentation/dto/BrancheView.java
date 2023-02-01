package com.percon.presentation.dto;

import java.util.UUID;

import javax.validation.constraints.NotNull;

public class BrancheView extends BrancheCreateView {

    private int version;

    @NotNull
    private UUID id;
    
    public BrancheView() {
    }

    /**
     * @return the version
     */
    public int getVersion() {
        return version;
    }

    /**
     * @param version the version to set
     */
    public void setVersion(int version) {
        this.version = version;
    }

    /**
     * @return the id
     */
    public UUID getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(UUID id) {
        this.id = id;
    }

}
