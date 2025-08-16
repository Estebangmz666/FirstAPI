package dev.estebangmz666.hello_world_spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Clase principal para iniciar la aplicación Spring Boot.
*/

@SpringBootApplication
public class HelloWorldSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloWorldSpringApplication.class, args);
	}
}