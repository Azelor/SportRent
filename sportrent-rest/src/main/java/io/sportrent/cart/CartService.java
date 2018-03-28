package io.sportrent.cart;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {
	
	@Autowired
	private CartRepository cartRepository;
	
	public List<Cart> getAllItems(String userId) {
		List<Cart> carts = new ArrayList<>();
		cartRepository.findByUserId(userId)
		.forEach(carts::add);
		return carts;
	}
	
	public Optional<Cart> getItem(String id) {
		return cartRepository.findById(id);
	}

	public void addItem(Cart cart) {
		cartRepository.save(cart);
	}

	public void updateItem(Cart user) {
		cartRepository.save(user);
	}

	public void deleteItem(String id) {
		cartRepository.deleteById(id);
	}
	
}
