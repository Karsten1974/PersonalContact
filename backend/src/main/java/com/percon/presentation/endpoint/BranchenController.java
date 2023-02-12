package com.percon.presentation.endpoint;

import com.percon.dataaccess.model.Branche;
import com.percon.service.IBrancheService;
import java.util.ArrayList;
import java.util.List;

import java.util.UUID;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
        brancheList.stream().map(t -> BrancheMapper.INSTANCE.toView(t)).forEach(viewList::add);
        
        return viewList;
    }

    @PutMapping("branche")
    public void update(@Valid @RequestBody BrancheView view) {
        Branche branche = brancheService.load(view.getId());
        if (branche != null) {
            Branche bra = BrancheMapper.INSTANCE.toEntity(view);

            brancheService.save(bra);
        }
    }

    @GetMapping("branche/{brancheUUID}")
    public BrancheView getBranche(@PathVariable(name = "brancheUUID", required = true) UUID brancheUUID) {
        Branche branche = brancheService.load(brancheUUID);
        if (branche != null) {
            return BrancheMapper.INSTANCE.toView(branche);
        }

        return null;
    }

    @DeleteMapping("branche/{brancheUUID}")
    public void delete(@PathVariable(name = "brancheUUID", required = true) UUID brancheUUID) {
        brancheService.delete(brancheUUID);
    }
    
    @PostMapping(path = "branche", consumes = { MediaType.APPLICATION_JSON_VALUE})
    public BrancheView create(@Valid @RequestBody BrancheCreateView view) {
        Branche branche = BrancheMapper.INSTANCE.toEntity(view);
        
        return BrancheMapper.INSTANCE.toView(brancheService.save(branche));
    }

}
