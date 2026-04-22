# FoodieForDaFam 

Family food app connecting chefs, shoppers, volunteers for home meals. Java backend + React frontend.

## Current Status
- **Backend**: Java domain/services (User auth with roles: CHEF/SHOPPER/VOLUNTEER). Run `java FoodieForDaFam.Main` for console demo.
- **Frontend**: Vite + React + TS + Tailwind. Live at http://localhost:5173 (npm run dev).
  - Pages: Home, Register, Login (mock service simulates backend).
- Spring Boot API removed per request.

## Step-by-Step Setup (Clone → Run)

### 1. Clone Repo
```bash
git clone https://github.com/YOUR_USERNAME/FoodieForDaFam.git
cd FoodieForDaFam
code .  # Opens in VS Code
```

### 2. Install VS Code Extensions (Terminal or GUI)
**Terminal (code --install-extension)**:
```bash
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension bradlc.vscode-tailwindcss
```

**Or GUI**: Ctrl+Shift+X → Search/install above.

### 3. Frontend (React App)
Terminal 1 (Ctrl+`):
```bash
cd react-frontend
npm install
npm run dev
```
- Opens http://localhost:5173 automatically
- Hot reload on edits

### 4. Backend Demo (Java)
Terminal 2 (Ctrl+Shift+`):
```bash
javac FoodieForDaFam/**/*.java
java FoodieForDaFam.Main
```
- Console demo: alice registers as CHEF, logs in

### Troubleshooting
- Node not found? Install LTS from nodejs.org
- Java? `java -version` (JDK 21+)
- Port busy? Kill process or `npm run dev -- --port 3000`

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
