package com.percon.rest.transfer;

import java.util.UUID;

import javax.validation.constraints.NotNull;

public class ContactView extends ContactCreateView {

    private int version;

    @NotNull
    private UUID id;
    
    private String bemerkung;
    
    private String todesprio;
    
    private String todesBemerkung;
    
    private UUID adrUUID;
    
    private UUID verbUUID;

    public ContactView() {
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

    /**
     * @return the bemerkung
     */
    public String getBemerkung() {
        return bemerkung;
    }

    /**
     * @param bemerkung the bemerkung to set
     */
    public void setBemerkung(String bemerkung) {
        this.bemerkung = bemerkung;
    }

    /**
     * @return the todesprio
     */
    public String getTodesprio() {
        return todesprio;
    }

    /**
     * @param todesprio the todesprio to set
     */
    public void setTodesprio(String todesprio) {
        this.todesprio = todesprio;
    }

    /**
     * @return the todesBemerkung
     */
    public String getTodesBemerkung() {
        return todesBemerkung;
    }

    /**
     * @param todesBemerkung the todesBemerkung to set
     */
    public void setTodesBemerkung(String todesBemerkung) {
        this.todesBemerkung = todesBemerkung;
    }

    /**
     * @return the adrUUID
     */
    public UUID getAdrUUID() {
        return adrUUID;
    }

    /**
     * @param adrUUID the adrUUID to set
     */
    public void setAdrUUID(UUID adrUUID) {
        this.adrUUID = adrUUID;
    }

    /**
     * @return the verbUUID
     */
    public UUID getVerbUUID() {
        return verbUUID;
    }

    /**
     * @param verbUUID the verbUUID to set
     */
    public void setVerbUUID(UUID verbUUID) {
        this.verbUUID = verbUUID;
    }

}
