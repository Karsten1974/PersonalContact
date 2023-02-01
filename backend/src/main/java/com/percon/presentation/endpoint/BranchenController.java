package com.percon.presentation.endpoint;

import com.percon.dataaccess.model.Branche;
import com.percon.service.IBrancheService;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.percon.presentation.dto.BrancheCreateView;
import com.percon.presentation.mapper.BrancheMapper;
import com.percon.presentation.dto.BrancheView;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BranchenController {
    
    @Autowired
    private IBrancheService brancheService;
    
    @GetMapping("branchen")
    public List<BrancheView> getBranchen() {
        List<BrancheView> viewList = new ArrayList<BrancheView>();
        
        List<Branche> brancheList = brancheService.getBranche();
        brancheList.stream().map(t -> BrancheMapper.toView(t)).forEach(viewList::add);
        
        return viewList;
    }
    
    @PostMapping(path = "branche", consumes = { MediaType.APPLICATION_JSON_VALUE})
    public BrancheView create(@Valid @RequestBody BrancheCreateView view) {
        Branche branche = new Branche();
        branche.setId(null); //damit Neu Anlage
        branche.setVersion(0);
        
        BrancheMapper.updateFromView(view, branche);
        
        return BrancheMapper.toView(brancheService.save(branche));
    }

}
