package io.sportrent.product;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
//import javax.persistence.GeneratedValue;

@Entity
public class Product {
	
	@Id
	//@GeneratedValue
	@Column(name= "id")
	private Integer id;
	@Column(name= "brand")
	private String brand;
	@Column(name= "img")
	private String img;
	@Column(name= "category")
	private String category;
	@Column(name= "name")
	private String name;
	@Column(precision=8, scale=2)
	private float price;
	@Column(columnDefinition = "TEXT")
	private String description;
	
	public Product() {
		
	}
	
	public Product(Integer id, String brand, String img, String category, String name, float price, String description) {
		super();
		this.id = id;
		this.brand = brand;
		this.img = img;
		this.category = category;
		this.name = name;
		this.price = price;
		this.description = description;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
