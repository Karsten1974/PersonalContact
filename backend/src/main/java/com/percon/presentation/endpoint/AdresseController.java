package com.percon.presentation.endpoint;

import com.percon.dataaccess.model.Adresse;
import com.percon.presentation.dto.AdresseCreateDto;
import com.percon.presentation.dto.AdresseDto;
import com.percon.presentation.dto.AdresseBezeichnungDto;
import com.percon.presentation.mapper.AdresseMapper;
import com.percon.service.AdresseService;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/adresse")
@CrossOrigin(origins = "http://localhost:4200")
public class AdresseController {

  @Autowired
  private AdresseService adresseService;

  private AdresseMapper mapper;

  @PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE })
  public @Valid UUID create(@Valid @RequestBody AdresseCreateDto view) {
    Adresse adresse = AdresseMapper.INSTANCE.toEntity(view);

    return adresseService.attach(adresse).getId();
  }

  @PutMapping
  public void update(@Valid @RequestBody AdresseDto view) {
    Adresse adresse = adresseService.findById(view.getId());
    if (adresse != null) {
      Adresse adr = AdresseMapper.INSTANCE.toEntity(view);

      adresseService.attach(adr);
    }
  }

  @GetMapping("/adressenbezeichnungen")
  public List<AdresseBezeichnungDto> getAdressenBezeichnung() {
    List<AdresseBezeichnungDto> viewList = new ArrayList<AdresseBezeichnungDto>();

    List<Adresse> adresseList = adresseService.findAll();
    adresseList.stream().map(t-> {
      AdresseDto view = AdresseMapper.INSTANCE.toView(t);
      return new AdresseBezeichnungDto(view.getVersion(), view.getId(), view.getOrt()+", "+view.getStrasse());
    }).forEach(viewList::add);

    return viewList;
  }

  @GetMapping("/{adressenID}")
  public AdresseDto getAdressen(@PathVariable(name = "adressenID", required = true) UUID adressenID) {
    Adresse adresse = adresseService.findById(adressenID);
    if (adresse != null) {
      return AdresseMapper.INSTANCE.toView(adresse);
    }

    return null;
  }

}
