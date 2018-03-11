package io.sportrent.item;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {
	
	@Autowired
	private ItemRepository itemRepository;
	
	public List<Item> getAllItems(String productId) {
		List<Item> items = new ArrayList<>();
		itemRepository.findByProductId(productId)
		.forEach(items::add);
		return items;
	}
	
	public Optional<Item> getItem(String id) {
		return itemRepository.findById(id);
	}

	public void addItem(Item item) {
		itemRepository.save(item);
	}

	public void updateItem(Item product) {
		itemRepository.save(product);
	}

	public void deleteItem(String id) {
		itemRepository.deleteById(id);
	}
	
}
