# CodeQuest

CodeQuest is a Full Stack application designed to explore and master modern web development technologies. It combines an Angular frontend with a Spring Boot backend, enabling user management and interaction with personalized messages.

## Description

CodeQuest provides the following functionalities:
- User registration with name, email, age, and favorite programming language.
- Retrieval of a test user from the backend.
- User search by ID.
- Personalized greetings and generic messages from the server.

## Technologies Used

[![Angular](https://img.shields.io/badge/Angular-18-red?style=for-the-badge&logo=angular)](https://angular.io/)  
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2-green?style=for-the-badge&logo=spring-boot)](https://spring.io/projects/spring-boot)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)  
[![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=java)](https://www.java.com/)  
- **Styling**: Custom CSS
- **Data Management**: JPA/Hibernate

## Requirements

- **Node.js** and **npm** (for the frontend)
- **Java JDK 17+** (for the backend)
- **Maven** (to build the backend)
- **Angular CLI** (installed globally: `npm install -g @angular/cli`)
- **Database**: H2 (embedded) or configured as per `application.properties`

## Installation

### Backend
1. Clone the repository or download the backend code.
2. Navigate to the backend directory and run:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
3. Ensure the database is configured in `src/main/resources/application.properties`.

### Frontend
1. Clone the repository or download the frontend code.
2. Navigate to the `my-frontend-angular` directory and run:
   ```bash
   npm install
   ng serve
   ```
3. Access the application at `http://localhost:4200`.

## Usage

- **Registration**: Enter the details in the "User Registration" form and click "Register".
- **Search**: Enter an ID in "Get User" and click "Get User".
- **Greetings**: Use the buttons "Retrieve Greeting from Spring Boot", "Retrieve Hello World", or "Submit Greeting" to interact with the backend.

## Contribution

Contributions are welcome. Please open an issue or submit a pull request with your proposals.

## Contact

[![Email](https://img.shields.io/badge/Email-estebangumy05@gmail.com-lightgrey?style=for-the-badge)](mailto:estebangumy05@gmail.com)  
[![GitHub](https://img.shields.io/badge/GitHub-@estebangmz666-black?style=for-the-badge&logo=github)](https://github.com/estebangmz666)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-znotkayn-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/znotkayn)

## License

&copy; 2025 Esteban Gomez Leon. All rights reserved.
