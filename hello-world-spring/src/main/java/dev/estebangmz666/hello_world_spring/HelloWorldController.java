package dev.estebangmz666.hello_world_spring;

import org.springframework.web.bind.annotation.RestController;

import dev.estebangmz666.hello_world_spring.model.FavoriteProgrammingLanguage;
import dev.estebangmz666.hello_world_spring.model.User;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {
    
    @GetMapping("/hello")
    public String greetWorld() {
        return "Hello World, EstebanGmz666 from Spring!";
    }
    
    @GetMapping("/")
    public String initialize() {
        return "Welcome to my first API!";
    }

    @GetMapping("/hello/{name}")
    public String personalizedGreeting(@PathVariable String name){
        return "¡Hello " + name + "!Welcome to my very very own API (Its Mine, I made it >:3)!";
    }

    @GetMapping("/user")
    public User getUser() {
        return new User("Esteban", "estebangumy05@gmail.com", 19, FavoriteProgrammingLanguage.JAVA, true);
    }
}