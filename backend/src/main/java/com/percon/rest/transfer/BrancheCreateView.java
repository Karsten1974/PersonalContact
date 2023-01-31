package com.percon.rest.transfer;

import javax.validation.constraints.NotNull;

public class BrancheCreateView {
    
    @NotNull
    private String bezeichnung;
    
    public BrancheCreateView() {
    }

    /**
     * @return the bezeichnung
     */
    public String getBezeichnung() {
        return bezeichnung;
    }

    /**
     * @param bezeichnung the bezeichnung to set
     */
    public void setBezeichnung(String bezeichnung) {
        this.bezeichnung = bezeichnung;
    }
    

}
