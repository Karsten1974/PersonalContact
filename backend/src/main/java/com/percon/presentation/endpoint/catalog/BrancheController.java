package com.percon.presentation.endpoint.catalog;

import com.percon.dataaccess.model.catalog.Branche;
import com.percon.presentation.dto.catalog.BrancheCreateDto;
import com.percon.presentation.dto.catalog.BrancheDto;
import com.percon.presentation.mapper.catalog.BrancheMapper;
import com.percon.service.catalog.BrancheService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/api/branche")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class BrancheController {
    
    private final @NonNull BrancheService brancheService;

    private final @NonNull BrancheMapper mapper;
    
    @GetMapping
    public List<BrancheDto> getBranchen() {
        List<BrancheDto> dtoList = new ArrayList<>();
        
        List<Branche> brancheList = brancheService.findAll();
        brancheList.stream().map(t -> mapper.toDto(t)).forEach(dtoList::add);
        
        return dtoList;
    }

    @PutMapping
    public void update(@Valid @RequestBody BrancheDto dto) {
        Branche branche = brancheService.findById(dto.getId());
        if (branche != null) {
            Branche bra = mapper.toEntity(dto);

            brancheService.attach(bra);
        }
    }

    @GetMapping("/{brancheUUID}")
    public BrancheDto getBranche(@PathVariable(name = "brancheUUID", required = true) UUID brancheUUID) {
        Branche branche = brancheService.findById(brancheUUID);
        if (branche != null) {
            return mapper.toDto(branche);
        }

        return null;
    }

    @GetMapping("/fachCode/{fachCode}")
    public BrancheDto getBrancheByFachCode(@PathVariable(name = "fachCode", required = true) String fachCode) {
        Branche branche = brancheService.findByFachCode(fachCode);
        if (branche != null) {
            return mapper.toDto(branche);
        }

        return null;
    }

    @DeleteMapping("/{brancheUUID}")
    public void delete(@PathVariable(name = "brancheUUID", required = true) UUID brancheUUID) {
        brancheService.delete(brancheUUID);
    }
    
    @PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE})
    public @Valid UUID create(@Valid @RequestBody BrancheCreateDto dto) {
        Branche branche = mapper.toEntity(dto);
        
        return brancheService.attach(branche).getId();
    }

}
