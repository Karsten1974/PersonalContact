package com.percon.service;

import com.percon.data.Branche;
import com.percon.data.repository.BrancheRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BrancheServiceImpl implements IBrancheService {
    
    @Autowired
    private BrancheRepository brancheRepository;

    /* (non-Javadoc)
     * @see com.percon.service.IBrancheService#save(com.percon.data.Branche)
     */
    @Override
    public Branche save(Branche branche) {
        return brancheRepository.save(branche);
    }

    /* (non-Javadoc)
     * @see com.percon.service.IBrancheService#load(java.util.UUID)
     */
    @Override
    public Branche load(UUID id) {
        Branche branche = null;
        
        Optional<Branche> optBranche = brancheRepository.findById(id);
        if (optBranche.isPresent()) {
            branche = optBranche.get();
        }

        return branche;
    }

    /* (non-Javadoc)
     * @see com.percon.service.IBrancheService#delete(java.lang.Long)
     */
    @Override
    public void delete(Long id) {
        // TODO Auto-generated method stub

    }

    /* (non-Javadoc)
     * @see com.percon.service.IBrancheService#findByBrancheUUID(java.util.UUID)
     */
    @Override
    public Branche findByBrancheUUID(UUID brancheUUID) {
        // TODO Auto-generated method stub
        return null;
    }

    /* (non-Javadoc)
     * @see com.percon.service.IBrancheService#getBranche()
     */
    @Override
    public List<Branche> getBranche() {
        List<Branche> list = new ArrayList<Branche>();
        
        brancheRepository.findAll().forEach(list::add);
        
        return list;
    }

}
