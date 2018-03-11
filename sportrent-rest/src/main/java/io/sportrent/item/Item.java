package io.sportrent.item;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import io.sportrent.product.Product;



@Entity
public class Item {
	
	@Id
	private String id;
	private String name;
	private String description;
	
	@ManyToOne
	private Product product;
	
	

	public Item() {
		
	}
	
	public Item(String id, String name, String description, String productId) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.product = new Product(productId, "", "");
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	
	

}

