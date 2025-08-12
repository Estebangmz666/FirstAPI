# 🚀 My First Full Stack Adventure

> 🎯 Angular frontend + Spring Boot backend with personalized greetings, modern glassmorphism UI, and REST API integration.

[![Angular](https://img.shields.io/badge/Angular-18-red?style=for-the-badge&logo=angular)](https://angular.io/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.0+-green?style=for-the-badge&logo=springboot)](https://spring.io/projects/spring-boot)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Java](https://img.shields.io/badge/Java-17+-orange?style=for-the-badge&logo=openjdk)](https://openjdk.org/)

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [📸 Screenshots](#-screenshots)
- [🔗 API Endpoints](#-api-endpoints)
- [🎯 Learning Objectives](#-learning-objectives)
- [👨‍💻 Author](#-author)

## ✨ Features

🎭 **Personalized Greetings** - Enter your name and get a custom greeting from the backend
  
🌐 **REST API Integration** - Angular frontend consuming Spring Boot APIs

🎨 **Modern UI Design** - Glassmorphism effects with gradient backgrounds

📱 **Responsive Design** - Works perfectly on desktop and mobile

⚡ **Real-time Feedback** - Loading states and error handling

🔄 **Dynamic Content** - Interactive buttons with smooth animations

## 🛠 Tech Stack

### Frontend
- **Angular 18** - Modern web framework
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Custom styling with modern effects
- **RxJS** - Reactive programming

### Backend  
- **Spring Boot 3.0+** - Java-based backend framework
- **Spring Web** - RESTful web services
- **Maven** - Dependency management
- **Java 17+** - Programming language

## 📁 Project Structure

```
FirstAPI/
│
├── 📂 frontend/                    # Angular Application
│   ├── 📂 src/
│   │   ├── 📂 app/
│   │   │   ├── 🟦 app.component.ts
│   │   │   ├── 🎨 app.component.css
│   │   │   └── 📄 app.component.html
│   │   └── 📄 main.ts
│   ├── 📄 package.json
│   └── 📄 angular.json
│
├── 📂 backend/                     # Spring Boot Application  
│   ├── 📂 src/
│   │   └── 📂 main/
│   │       └── 📂 java/
│   │           └── 📂 com/example/demo/
│   │               ├── 🟨 HelloWorldSpringApplication.java
│   │               └── 🟨 HelloWorldController.java
│   └── 📄 pom.xml
│
└── 📖 README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- ☕ **Java 17+** 
- 🟢 **Node.js 18+** & npm
- 🅰️ **Angular CLI** (`npm install -g @angular/cli`)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/estebangmz666/FirstAPI.git
cd FirstAPI
```

### 2️⃣ Backend Setup (Spring Boot)

```bash
cd hello-world-spring
./mvnw spring-boot:run
```

The backend will be running on: `http://localhost:8080`

### 3️⃣ Frontend Setup (Angular)

Open a new terminal:

```bash
cd my-frontend-angular
npm install
ng serve
```

The frontend will be running on: `http://localhost:4200`

### 4️⃣ Ready to Go! 🎉

Open your browser and navigate to `http://localhost:4200` to see the application in action!

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api` | Get a simple greeting message |
| `GET` | `/api/hello` | Get "Hello World!" message |
| `GET` | `/api/hello/{name}` | Get personalized greeting with name |

### Example Requests:

```bash
# Simple greeting
curl http://localhost:8080/api

# Personalized greeting
curl http://localhost:8080/api/hello/Esteban
```

## 🎯 Learning Objectives

This project was built to learn and practice:

✅ **Full Stack Development** - Connecting frontend and backend  
✅ **REST API Design** - Creating and consuming APIs  
✅ **Modern UI/UX** - Implementing glassmorphism and animations  
✅ **TypeScript** - Type-safe frontend development  
✅ **Spring Boot** - Java backend development  
✅ **CORS Configuration** - Cross-origin resource sharing  
✅ **Responsive Design** - Mobile-first approach  
✅ **Error Handling** - User-friendly error messages  

## 🚀 Future Enhancements

- 🗃️ Database integration (PostgreSQL/MySQL)
- 📊 Data visualization with charts
- 🧪 Unit and integration tests
- 🐳 Docker containerization

## 👨‍💻 Author

**Esteban Gomez Leon**

- 📧 Email: [estebangumy05@gmail.com](mailto:estebangumy05@gmail.com)
- 💼 LinkedIn: [znotkayn](https://linkedin.com/in/znotkayn)  
- 🐱 GitHub: [estebangmz666](https://github.com/estebangmz666)

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star!

**Made with 💜 for learning Full Stack Development**

*This is my first full stack project - feedback and suggestions are always welcome!* 🚀

</div>
