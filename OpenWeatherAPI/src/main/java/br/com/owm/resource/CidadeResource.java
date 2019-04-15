package br.com.owm.resource;


import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.owm.domain.Cidade;
import br.com.owm.service.CidadeServiceImpl;

@RestController
@RequestMapping(value="/cidades")
public class CidadeResource {

	@Autowired
	private CidadeServiceImpl service;

	public CidadeResource() {
		// TODO Auto-generated constructor stub
	}
	

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public ResponseEntity<Cidade> findById(@PathVariable Integer id) {
		Cidade obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Cidade>> findAll() {
		List<Cidade> obj = service.getAll();
		return ResponseEntity.ok().body(obj);
	}

	@RequestMapping(method = RequestMethod.POST, produces = { "application/json" })
	public ResponseEntity<Cidade> add(@RequestBody Cidade cidade) {
		cidade = service.save(cidade);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(cidade.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable("id") Integer cidade_id) {
		this.service.findById(cidade_id);
		this.service.delete(cidade_id);
		return ResponseEntity.noContent().build();
	}

}
