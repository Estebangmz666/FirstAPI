package dev.estebangmz666.hello_world_spring.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GreetingController {
    
    @GetMapping("/hello")
    public String greetWorld() {
        return "Hello World, EstebanGmz666 from Spring!";
    }

    @GetMapping("/")
    public String initialize() {
        return "Welcome to my first API!";
    }

    @GetMapping("/hello/{name}")
    public String personalizedGreeting(@PathVariable String name) {
        return "¡Hello " + name + "! Welcome to my very very own API!";
    }
}