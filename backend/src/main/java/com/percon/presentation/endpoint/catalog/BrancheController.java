package com.percon.presentation.endpoint.catalog;

import com.percon.dataaccess.model.catalog.BrancheEntity;
import com.percon.presentation.dto.catalog.BrancheCreateDto;
import com.percon.presentation.dto.catalog.BrancheDto;
import com.percon.presentation.mapper.catalog.BrancheMapper;
import com.percon.service.catalog.BrancheService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@Validated
@RequestMapping(value = "/api/branche")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class BrancheController {
    
    private final @NonNull BrancheService brancheService;

    private final @NonNull BrancheMapper mapper;
    
    @GetMapping
    public List<BrancheDto> getBranchen() {
        List<BrancheDto> dtoList = new ArrayList<>();
        
        List<BrancheEntity> brancheList = (List<BrancheEntity>) brancheService.findAll();
        brancheList.stream().map(t -> mapper.toDto(t)).forEach(dtoList::add);
        
        return dtoList;
    }

    @PutMapping
    public void update(@Valid @NotNull @RequestBody BrancheDto dto) {
        Optional<BrancheEntity> branche = brancheService.findById(dto.getId());
        if (branche.isPresent()) {
            BrancheEntity bra = mapper.toEntity(dto);

            brancheService.attach(bra);
        }
    }

    @GetMapping("/{brancheUUID}")
    public ResponseEntity<BrancheDto> getBranche(@PathVariable(name = "brancheUUID", required = true) UUID brancheUUID) {
        Optional<BrancheEntity> branche = brancheService.findById(brancheUUID);

        if (branche.isPresent()) {
            return ResponseEntity.ok(mapper.toDto(branche.get()));
        }

        return ResponseEntity.notFound().build();
    }

    @GetMapping("/fachCode/{fachCode}")
    public ResponseEntity<BrancheDto> getBrancheByFachCode(@PathVariable(name = "fachCode", required = true) String fachCode) {
        Optional<BrancheEntity> branche = brancheService.findByFachCode(fachCode);
        if (branche.isPresent()) {
            return ResponseEntity.ok(mapper.toDto(branche.get()));
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{brancheUUID}")
    public void delete(@PathVariable(name = "brancheUUID", required = true) UUID brancheUUID) {
        brancheService.delete(brancheUUID);
    }
    
    @PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE})
    public @Valid UUID create(@Valid @RequestBody BrancheCreateDto dto) {
        BrancheEntity branche = mapper.toEntity(dto);
        
        return brancheService.attach(branche).getId();
    }

}
