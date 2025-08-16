package dev.estebangmz666.hello_world_spring.model;

public enum FavoriteProgrammingLanguage {
    Java("Java"), Kotlin("Kotlin"), Python("Python"), Swift("Swift"), Elixir("Elixir");
    
    private final String value;

    FavoriteProgrammingLanguage(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}