package com.percon.dataaccess.model;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Version;


@Entity
public class Contact {
    
    @GeneratedValue @Id
    private UUID id;

    @Version
    private int version;
    
    @ManyToOne
    @JoinColumn(name="branche_uuid")
    private Branche branche;
    
    private UUID adrUUID;
    
    private UUID verbUUID;
    
    @Column(length = 50)
    private String name;
    
    @Column(length = 50)
    private String vorname;
    
    @Column(length = 50)
    private String bemerkung;
    
    @Column(length = 50)
    private String todesprio;
    
    @Column(length = 50)
    private String todesBemerkung;
    
    public Contact() {
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
     * @return the branche
     */
    public Branche getBranche() {
        return branche;
    }

    /**
     * @param branche the branche to set
     */
    public void setBranche(Branche branche) {
        this.branche = branche;
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
    
}
