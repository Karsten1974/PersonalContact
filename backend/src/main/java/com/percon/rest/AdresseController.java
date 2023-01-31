package com.percon.rest;

import com.percon.data.Adresse;
import com.percon.rest.transfer.AdresseCreateView;
import com.percon.rest.transfer.AdresseView;
import com.percon.rest.transfer.AdresseBezeichnungView;
import com.percon.rest.transfer.AdresseMapper;
import com.percon.service.IAdresseService;
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

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdresseController {

  @Autowired
  private IAdresseService adresseService;

  @PostMapping(path = "adresse", consumes = { MediaType.APPLICATION_JSON_VALUE })
  public AdresseView create(@Valid @RequestBody AdresseCreateView view) {
    Adresse adresse = AdresseMapper.INSTANCE.toEntity(view);

    return AdresseMapper.INSTANCE.toView(adresseService.save(adresse));
  }

  @GetMapping("adressenbezeichnungen")
  public List<AdresseBezeichnungView> getAdressenBezeichnung() {
    List<AdresseBezeichnungView> viewList = new ArrayList<AdresseBezeichnungView>();

    List<Adresse> adresseList = adresseService.getAdressen();
    adresseList.stream().map(t-> {
      AdresseView view = AdresseMapper.INSTANCE.toView(t);
      return new AdresseBezeichnungView(view.getVersion(), view.getId(), view.getOrt()+", "+view.getStrasse());
    }).forEach(viewList::add);

    return viewList;
  }

}
