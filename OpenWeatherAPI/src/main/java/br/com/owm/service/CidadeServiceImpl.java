package br.com.owm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.owm.contract.ICidadeContract;
import br.com.owm.domain.Cidade;
import br.com.owm.repository.CidadeRepository;

import br.com.owm.service.exception.ObjectNotFound;
@Service
public class CidadeServiceImpl implements ICidadeContract {

	@Autowired
	CidadeRepository repository;
	
	public CidadeServiceImpl() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public Cidade save(Cidade cidade) {
		return this.repository.save(cidade);
	}

	@Override
	public void delete(Integer cidade_id) {
		this.repository.deleteById(cidade_id);;
		
	}

	@Override
	public List<Cidade> getAll() {
		return this.repository.findAll();
	}

	@Override
	public Cidade findById(Integer cidade_id) {
		Optional<Cidade> cidade = this.repository.findById(cidade_id);
		return cidade.orElseThrow(() -> new ObjectNotFound("Objeto "+ cidade_id +" não encontrado!"));
	}

}
