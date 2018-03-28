package io.sportrent.cart;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface CartRepository extends CrudRepository<Cart, String>{
	@Query
	public List<Cart> findByUserId(String UserId);

}
