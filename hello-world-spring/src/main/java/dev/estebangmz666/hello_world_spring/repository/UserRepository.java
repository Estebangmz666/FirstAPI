package dev.estebangmz666.hello_world_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.estebangmz666.hello_world_spring.model.User;

public interface UserRepository extends JpaRepository<User, Long>{ }