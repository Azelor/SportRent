package io.sportrent;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableJpaRepositories(basePackages = "io.sportrent")
@SpringBootApplication
public class SportrentRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(SportrentRestApplication.class, args);
	}
}
