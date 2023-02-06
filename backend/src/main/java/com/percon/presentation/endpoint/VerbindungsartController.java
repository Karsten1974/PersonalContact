package com.percon.presentation.endpoint;

import com.percon.dataaccess.model.Verbindungsart;
import com.percon.presentation.dto.VerbindungsartCreateView;
import com.percon.presentation.dto.VerbindungsartView;
import com.percon.presentation.mapper.VerbindungsartMapper;
import com.percon.service.IVerbindungsartenService;
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

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class VerbindungsartController {

  @Autowired
  private IVerbindungsartenService verbindungsartenService;

  @GetMapping("verbindungsarten")
  public List<VerbindungsartView> getVerbindungsarten() {
    List<VerbindungsartView> viewList = new ArrayList<VerbindungsartView>();

    List<Verbindungsart> verbindungsartList = verbindungsartenService.getVerbindungsarten();
    verbindungsartList.stream().map(t -> VerbindungsartMapper.INSTANCE.toView(t)).forEach(viewList::add);

    return viewList;
  }

  @PutMapping("verbindungsart")
  public void update(@Valid @RequestBody VerbindungsartView view) {
    Verbindungsart verbindungsart = verbindungsartenService.load(view.getId());
    if (verbindungsart != null) {
      Verbindungsart verbart = VerbindungsartMapper.INSTANCE.toEntity(view);

      verbindungsartenService.save(verbart);
    }
  }

  @GetMapping("verbindungsart/{verbindungsartUUID}")
  public VerbindungsartView getVerbindungsart(@PathVariable(name = "verbindungsartUUID", required = true) UUID verbindungsartUUID) {
    Verbindungsart verbindungsart = verbindungsartenService.load(verbindungsartUUID);
    if (verbindungsart != null) {
      return VerbindungsartMapper.INSTANCE.toView(verbindungsart);
    }

    return null;
  }

  @DeleteMapping("verbindungsart/{verbindungsartUUID}")
  public void delete(@PathVariable(name = "verbindungsartUUID", required = true) UUID verbindungsartUUID) {
    verbindungsartenService.delete(verbindungsartUUID);
  }

  @PostMapping(path = "verbindungsart", consumes = { MediaType.APPLICATION_JSON_VALUE})
  public VerbindungsartView create(@Valid @RequestBody VerbindungsartCreateView view) {
    Verbindungsart verbindungsart = VerbindungsartMapper.INSTANCE.toEntity(view);

    return VerbindungsartMapper.INSTANCE.toView(verbindungsartenService.save(verbindungsart));
  }

}
