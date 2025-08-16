package dev.estebangmz666.hello_world_spring.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Valid email is required")
    @Email(message = "Valid email is required")
    private String email;

    @NotNull(message ="Age is required")
    @Min(value = 0, message = "Age must be non-negative")
    private Integer age;

    @NotNull(message = "Favorite Programming Language is required")
    @Enumerated(EnumType.STRING)
    private FavoriteProgrammingLanguage favoriteProgrammingLanguage;

    @NotNull(message = "Active status is required")
    private Boolean isActive = true;

    public User(){
        this.isActive = true;
    }

    public User(String name, String email, Integer age, FavoriteProgrammingLanguage favoriteProgrammingLanguage, Boolean isActive) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.favoriteProgrammingLanguage = favoriteProgrammingLanguage;
        this.isActive = isActive != null ? isActive : true;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Integer getAge() {
        return age;
    }
    public void setAge(Integer age) {
        this.age = age;
    }
    public FavoriteProgrammingLanguage getFavoriteProgrammingLanguage() {
        return favoriteProgrammingLanguage;
    }
    public void setFavoriteProgrammingLanguage(FavoriteProgrammingLanguage favoriteProgrammingLanguage) {
        this.favoriteProgrammingLanguage = favoriteProgrammingLanguage;
    }
    public Boolean getIsActive() {
        return isActive;
    }
    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    @Override
    public String toString() {
        return "User [id=" + id + ", name=" + name + ", email=" + email + ", age=" + age
                + ", favoriteProgrammingLanguage=" + favoriteProgrammingLanguage + ", isActive=" + isActive + "]";
    }

    
}