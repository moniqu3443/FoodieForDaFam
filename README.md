# FoodieForDaFam 

Family food app connecting chefs, shoppers, volunteers for home meals. Java backend + React frontend.

## Current Status
- **Backend**: Java domain/services (User auth with roles: CHEF/SHOPPER/VOLUNTEER). Run `java FoodieForDaFam.Main` for console demo.
- **Frontend**: Vite + React + TS + Tailwind. Live at http://localhost:5173 (npm run dev).
  - Pages: Home, Register, Login (mock service simulates backend).
- Spring Boot API removed per request.

## Quick Start

### Frontend
```bash
cd react-frontend
npm install
npm run dev  # http://localhost:5173
```

### Backend Demo
```bash
javac FoodieForDaFam/**/*.java  # Compile
java FoodieForDaFam.Main  # Run register/login demo
```

## Features
- User registration/login (password hash/salt mock).
- Roles: User/Chef/Shopper/Volunteer.
- Responsive Tailwind UI.
- In-memory storage (mock).

## Tech Stack
- Frontend: React 18, Vite, TypeScript, Tailwind CSS, React Router.
- Backend: Java 21.

## Next Steps
- Real API integration (Java Spring/Quarkus).
- Recipes, grocery orders, real DB (MySQL?).
- Auth tokens, state management (Zustand/Redux).

## Screenshots
(Add after running: Home/Register/Login)

![Home](screenshots/home.png)
![Register](screenshots/register.png)

## License
MIT
