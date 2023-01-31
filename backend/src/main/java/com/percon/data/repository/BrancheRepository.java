package com.percon.data.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.percon.data.Branche;


@Repository
public interface BrancheRepository extends CrudRepository<Branche, UUID> {
}
