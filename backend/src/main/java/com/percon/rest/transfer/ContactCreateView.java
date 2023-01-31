package com.percon.rest.transfer;

import java.util.UUID;

import javax.validation.constraints.NotNull;

public class ContactCreateView {
    
    @NotNull
    private UUID brancheUUID;
    
    private String name;
    
    private String vorname;
    
    public ContactCreateView() {
    }

    /**
     * @return the brancheUUID
     */
    public UUID getBrancheUUID() {
        return brancheUUID;
    }

    /**
     * @param brancheUUID the brancheUUID to set
     */
    public void setBrancheUUID(UUID brancheUUID) {
        this.brancheUUID = brancheUUID;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the vorname
     */
    public String getVorname() {
        return vorname;
    }

    /**
     * @param vorname the vorname to set
     */
    public void setVorname(String vorname) {
        this.vorname = vorname;
    }

}
