package com.percon.rest.transfer;

import com.percon.data.Contact;

public class ContactMapper {
    
    public static void updateFromView(final ContactCreateView view, final Contact contact) {
        contact.setName(view.getName());
        contact.setVorname(view.getVorname());
    }
    
    public static void updateFromView(final ContactView view, final Contact contact) {
        contact.setName(view.getName());
        contact.setVorname(view.getVorname());
        contact.setId(view.getId());
        contact.setVersion(view.getVersion());
        contact.setBemerkung(view.getBemerkung());
        contact.setTodesprio(view.getTodesprio());
        contact.setTodesBemerkung(view.getTodesBemerkung());
        contact.setAdrUUID(view.getAdrUUID());
        contact.setVerbUUID(view.getVerbUUID());
    }
    
    public static ContactView toView(final Contact contact) {
        ContactView view = new ContactView();
        
        view.setBrancheUUID(contact.getBranche().getId());
        view.setName(contact.getName());
        view.setVorname(contact.getVorname());
        view.setId(contact.getId());
        view.setVersion(contact.getVersion());
        view.setBemerkung(contact.getBemerkung());
        view.setTodesprio(contact.getTodesprio());
        view.setTodesBemerkung(contact.getTodesBemerkung());
        view.setAdrUUID(contact.getAdrUUID());
        view.setVerbUUID(contact.getVerbUUID());
        
        return view;
    }
    
}
