# 🏠 RentalApp: AI-Powered Property Management Ecosystem

[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Ollama](https://img.shields.io/badge/Ollama-black?style=for-the-badge&logo=ollama)](https://ollama.com/)

A comprehensive, full-stack rental application ecosystem featuring a Spring Boot backend, a modern React frontend, and a specialized AI-powered NL2SQL engine. This project enables seamless property management and intuitive data querying through natural language.

---

## Overview

RentalApp is designed to modernize the rental market experience. It combines a robust core for transaction and user management with a cutting-edge AI engine that allows users and admins to query listing data using plain English, powered by local LLMs (Gemma 3).

### Key Components:
- **`renting-app-frontend`**: A responsive React interface for browsing, listing, and querying properties.
- **`renting-app-backend`**: A scalable Spring Boot microservice handling core business logic, authentication, and database persistence.
- **`renting-app-nltosql`**: A high-performance FastAPI service that translates Natural Language questions into executable SQL queries using Ollama and LangChain.

---

## Tech Stack

### Frontend
- **Framework**: React.js
- **Styling**: Vanilla CSS / Tailwind (Modern Responsive Design)
- **State Management**: Context API / Hooks

### Backend (Core)
- **Framework**: Java / Spring Boot
- **Database**: MySQL
- **Security**: Spring Security / JWT (Optional)
- **Build Tool**: Maven

### AI Service (NL2SQL)
- **Framework**: Python / FastAPI
- **LLM Orchestration**: LangChain
- **Local LLM**: Ollama (Gemma 3:1b)
- **ORM**: SQLAlchemy

---

## Project Structure

```text
RentalApplication/
├── renting-app-frontend/     # React Client Application
├── renting-app-backend/      # Spring Boot Core Service
├── renting-app-nltosql/      # FastAPI AI Engine
│   ├── app/                  # Logic & API
│   ├── requirements.txt      # Python Dependencies
│   └── .env.example          # AI Config Template
├── docs/                     # Additional Documentation
└── README.md                 # This File
```

---

## Setup Instructions

### 1. Prerequisites
- **Java 17+** & **Maven**
- **Node.js 18+** & **npm**
- **Python 3.10+**
- **MySQL Server**
- **Ollama** (for AI features)

### 2. Database Setup
1. Create a MySQL database named `rental_db`.
2. Configure your credentials in the respective `.env` or `application.properties` files.

### 3. Running the Backend (Spring Boot)
```bash
cd renting-app-backend
mvn clean install
mvn spring-boot:run
```

### 4. Running the AI Service (FastAPI)
```bash
cd renting-app-nltosql
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
ollama pull gemma3:1b
uvicorn app.main:app --reload
```

### 5. Running the Frontend (React)
```bash
cd renting-app-frontend
npm install
npm run dev
```

---

## Usage

1. **Browsing**: Users can view property listings via the React dashboard.
2. **AI Querying**: Use the search bar to ask questions like:
   - *"Show me houses in Malabe under 60k"*
   - *"Find all listings with more than 3 bedrooms"*
3. **Management**: Admins can add/edit listings via the Spring Boot backend API.

---

## Future Improvements
- [ ] **Dockerization**: Containerize all services for one-click deployment.
- [ ] **Vector Search**: Hybrid search combining SQL and semantic embeddings.
- [ ] **Mobile App**: Dedicated React Native application.
- [ ] **Real-time Chat**: WebSocket-based communication between sellers and renters.

---

## Commit Standard
This project follows the **Conventional Commits** specification:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting)
- `refactor`: A code change that neither fixes a bug nor adds a feature

---

## Author
**Gayuth**
- [GitHub](https://github.com/Gayuth-W)
- [LinkedIn](https://linkedin.com/in/yourprofile)