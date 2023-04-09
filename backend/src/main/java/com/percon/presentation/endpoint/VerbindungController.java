package com.percon.presentation.endpoint;

import com.percon.dataaccess.model.contact.Verbindung;
import com.percon.presentation.dto.contact.VerbindungCreateDto;
import com.percon.presentation.dto.contact.VerbindungDto;
import com.percon.presentation.mapper.VerbindungMapper;
import com.percon.service.IVerbindungService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/api/verbindung")
public class VerbindungController {
    
    @Autowired
    private IVerbindungService verbindungService;
    
    @GetMapping
    public List<VerbindungDto> getVerbindungen() {
      List<VerbindungDto> viewList = new ArrayList<VerbindungDto>();

      List<Verbindung> verbindungList = verbindungService.getVerbindungen();
      verbindungList.stream().map(t -> VerbindungMapper.INSTANCE.toView(t)).forEach(viewList::add);

      return viewList;
    }

    @PutMapping
    public void update(@Valid @RequestBody VerbindungDto view) {
      Verbindung verbindung = verbindungService.load(view.getId());
      if (verbindung != null) {
        Verbindung verb = VerbindungMapper.INSTANCE.toEntity(view);

        verbindungService.save(verb);
      }
    }

    @GetMapping("/{verbindungUUID}")
    public VerbindungDto getVerbindungsart(@PathVariable(name = "verbindungUUID", required = true) UUID verbindungUUID) {
        Verbindung verbindung = verbindungService.load(verbindungUUID);
      if (verbindung != null) {
        return VerbindungMapper.INSTANCE.toView(verbindung);
      }

      return null;
    }

    @DeleteMapping("/{verbindungUUID}")
    public void delete(@PathVariable(name = "verbindungUUID", required = true) UUID verbindungUUID) {
        verbindungService.delete(verbindungUUID);
    }

    @PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE})
    public VerbindungDto create(@Valid @RequestBody VerbindungCreateDto view) {
      Verbindung verbindung = VerbindungMapper.INSTANCE.toEntity(view);

      return VerbindungMapper.INSTANCE.toView(verbindungService.save(verbindung));
    }
}
