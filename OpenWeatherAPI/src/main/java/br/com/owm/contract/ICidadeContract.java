package br.com.owm.contract;

import java.util.List;

import br.com.owm.domain.Cidade;

public interface ICidadeContract {

	public Cidade save(Cidade cidade);

	public void delete(Integer cidade_id);
		
	public  List<Cidade> getAll();
	
	public Cidade findById(Integer comment_id);
}
