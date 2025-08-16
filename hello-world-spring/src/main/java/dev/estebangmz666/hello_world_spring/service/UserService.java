package dev.estebangmz666.hello_world_spring.service;

import org.springframework.stereotype.Service;

import dev.estebangmz666.hello_world_spring.model.FavoriteProgrammingLanguage;
import dev.estebangmz666.hello_world_spring.model.User;

@Service
public class UserService {
    private final User TEST_USER = new User("John Doe", "johndoe@gmail.com", 18, FavoriteProgrammingLanguage.Java,true);

    public User getTestUser() {
        return TEST_USER;
    }
}