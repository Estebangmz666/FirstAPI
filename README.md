CodeQuest
CodeQuest is a Full Stack application designed to explore and master modern web development technologies. It combines an Angular frontend with a Spring Boot backend, enabling user management and interaction with personalized messages.
Description
CodeQuest provides the following functionalities:

User registration with name, email, age, and favorite programming language.
Retrieval of a test user from the backend.
User search by ID.
Personalized greetings and generic messages from the server.

Technologies Used
  

Styling: Custom CSS
Data Management: JPA/Hibernate

Requirements

Node.js and npm (for the frontend)
Java JDK 17+ (for the backend)
Maven (to build the backend)
Angular CLI (installed globally: npm install -g @angular/cli)
Database: H2 (embedded) or configured as per application.properties

Installation
Backend

Clone the repository or download the backend code.
Navigate to the backend directory and run:mvn clean install
mvn spring-boot:run


Ensure the database is configured in src/main/resources/application.properties.

Frontend

Clone the repository or download the frontend code.
Navigate to the my-frontend-angular directory and run:npm install
ng serve


Access the application at http://localhost:4200.

Usage

Registration: Enter the details in the "User Registration" form and click "Register".
Search: Enter an ID in "Get User" and click "Get User".
Greetings: Use the buttons "Retrieve Greeting from Spring Boot", "Retrieve Hello World", or "Submit Greeting" to interact with the backend.

Contribution
Contributions are welcome. Please open an issue or submit a pull request with your proposals.
Contact

License
© 2025 Esteban Gomez Leon. All rights reserved.