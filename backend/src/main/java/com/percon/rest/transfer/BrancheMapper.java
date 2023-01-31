package com.percon.rest.transfer;

import com.percon.data.Branche;

public class BrancheMapper {
    
    public static void updateFromView(final BrancheCreateView view, final Branche branche) {
        branche.setBezeichnung(view.getBezeichnung());
    }
    
    public static void updateFromView(final BrancheView view, final Branche branche) {
        branche.setBezeichnung(view.getBezeichnung());
        branche.setId(view.getId());
        branche.setVersion(view.getVersion());
    }
    
    public static BrancheView toView(final Branche branche) {
        BrancheView view = new BrancheView();
        
        view.setBezeichnung(branche.getBezeichnung());
        view.setId(branche.getId());
        view.setVersion(branche.getVersion());
        
        return view;
    }

}
