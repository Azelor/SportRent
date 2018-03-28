package io.sportrent.cart;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.sportrent.user.*;

@RestController
public class CartController {
	
	@Autowired
	private CartService cartService;

	@RequestMapping("/users/{id}/cart")
	public List<Cart> getAllItems(@PathVariable String id) {
		return cartService.getAllItems(id);
	}
	
	@RequestMapping("/users/{UserId}/cart/{id}")
	public Optional<Cart> getItem(@PathVariable String id) {
		return cartService.getItem(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/users/{userId}/cart")
	public void addItem(@RequestBody Cart cart, @PathVariable String userId) {
		cart.setUser(new User(userId, "", ""));
		cartService.addItem(cart);
	}
		
	@RequestMapping(method=RequestMethod.PUT, value="/users/{userId}/cart/{id}")
	public void updateItem(@RequestBody Cart cart, @PathVariable String userId, @PathVariable String id) {
		cart.setUser(new User(userId, "", ""));
		cartService.updateItem(cart);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/users/{userId}/cart/{id}")
	public void deleteItem(@PathVariable String id) {
		cartService.deleteItem(id);
	}
}
