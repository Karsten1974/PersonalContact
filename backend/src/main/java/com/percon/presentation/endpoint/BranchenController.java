package com.percon.presentation.endpoint;

import com.percon.dataaccess.model.Branche;
import com.percon.presentation.dto.BrancheCreateView;
import com.percon.presentation.dto.BrancheView;
import com.percon.presentation.mapper.BrancheMapper;
import com.percon.service.IBrancheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/api/branche")
public class BranchenController {
    
    @Autowired
    private IBrancheService brancheService;
    
    @GetMapping
    public List<BrancheView> getBranchen() {
        List<BrancheView> viewList = new ArrayList<BrancheView>();
        
        List<Branche> brancheList = brancheService.getBranche();
        brancheList.stream().map(t -> BrancheMapper.INSTANCE.toView(t)).forEach(viewList::add);
        
        return viewList;
    }

    @PutMapping
    public void update(@Valid @RequestBody BrancheView view) {
        Branche branche = brancheService.load(view.getId());
        if (branche != null) {
            Branche bra = BrancheMapper.INSTANCE.toEntity(view);

            brancheService.save(bra);
        }
    }

    @GetMapping("/{brancheUUID}")
    public BrancheView getBranche(@PathVariable(name = "brancheUUID", required = true) UUID brancheUUID) {
        Branche branche = brancheService.load(brancheUUID);
        if (branche != null) {
            return BrancheMapper.INSTANCE.toView(branche);
        }

        return null;
    }

    @DeleteMapping("/{brancheUUID}")
    public void delete(@PathVariable(name = "brancheUUID", required = true) UUID brancheUUID) {
        brancheService.delete(brancheUUID);
    }
    
    @PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE})
    public BrancheView create(@Valid @RequestBody BrancheCreateView view) {
        Branche branche = BrancheMapper.INSTANCE.toEntity(view);
        
        return BrancheMapper.INSTANCE.toView(brancheService.save(branche));
    }

}
