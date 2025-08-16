package dev.estebangmz666.hello_world_spring.controller;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.estebangmz666.hello_world_spring.model.User;
import dev.estebangmz666.hello_world_spring.repository.UserRepository;
import dev.estebangmz666.hello_world_spring.service.UserService;
import jakarta.validation.Valid;


@RestController
@RequestMapping("/user")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    private final UserRepository userRepository;
    private final UserService userService; 

    public UserController(UserRepository userRepository, UserService userService){
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping
    public User getUser() {
        return userService.getTestUser();
    }

    @PostMapping(value = "/signup", produces = "text/plain")
    public ResponseEntity<String> signupUser(@Valid @RequestBody User user) {
        logger.info("Received user: {}", user);
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }
}