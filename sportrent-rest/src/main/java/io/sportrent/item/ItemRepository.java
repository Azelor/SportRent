package io.sportrent.item;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, String>{
	
	public List<Item> findByProductId(String ProductId);

}
