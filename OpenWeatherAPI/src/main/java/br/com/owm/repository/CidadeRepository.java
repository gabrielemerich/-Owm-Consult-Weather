package br.com.owm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.owm.domain.Cidade;

public interface CidadeRepository extends JpaRepository<Cidade, Integer> {

}
