package io.sportrent.item;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.sportrent.product.*;

@RestController
public class ItemController {
	
	@Autowired
	private ItemService itemService;

	@RequestMapping("/products/{id}/items")
	public List<Item> getAllItems(@PathVariable String id) {
		return itemService.getAllItems(id);
	}
	
	@RequestMapping("/products/{ProductId}/items/{id}")
	public Optional<Item> getItem(@PathVariable String id) {
		return itemService.getItem(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/products/{productId}/items")
	public void addItem(@RequestBody Item item, @PathVariable String productId) {
		item.setProduct(new Product(productId, "", ""));
		itemService.addItem(item);
	}
		
	@RequestMapping(method=RequestMethod.PUT, value="/products/{productId}/items/{id}")
	public void updateItem(@RequestBody Item item, @PathVariable String productId, @PathVariable String id) {
		item.setProduct(new Product(productId, "", ""));
		itemService.updateItem(item);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/products/{productId}/items/{id}")
	public void deleteItem(@PathVariable String id) {
		itemService.deleteItem(id);
	}
}
