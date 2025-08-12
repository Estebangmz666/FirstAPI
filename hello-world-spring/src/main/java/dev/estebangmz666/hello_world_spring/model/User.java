package dev.estebangmz666.hello_world_spring.model;

public class User {
    private String name;
    private String email;
    private Integer age;
    private FavoriteProgrammingLanguage favoriteProgrammingLanguage;
    private Boolean isActive;

    

    public User(String name, String email, Integer age, FavoriteProgrammingLanguage favoriteProgrammingLanguage, Boolean isActive) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.favoriteProgrammingLanguage = favoriteProgrammingLanguage;
        this.isActive = isActive;
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
}