# FoodieForDaFam 

Family food app connecting chefs, shoppers, volunteers for home meals.
Java CLI Backend (fully functional).

Website Template (Figma):
https://guard-book-56368466.figma.site/l


========================
CURRENT STATUS
========================
- Backend: Java CLI apps with roles, inventory management, grocery orders, alerts.
  - ConsoleUserInterface: Interactive role menus (Shopper orders work!)
  - FoodieForDaFam.Main: User registration + polymorphism demo
  - GroceryOrderManager: Inventory + order system using inventory.txt


========================
SETUP & RUN (TERMINAL)
========================

STEP 1 — Check Java Version
Run this in terminal:
java -version

(You need JDK 21+)


STEP 2 — Clone the Repository
Run:
git clone https://github.com/moniqu3443/FoodieForDaFam.git

Then:
cd FoodieForDaFam


========================
RUN THE PROGRAMS
========================

OPTION A — Main Demo (Console UI)  [RECOMMENDED]
Run these commands:

javac -d out ConsoleUserInterface.java
java -cp out ConsoleUserInterface

Then in the program:
1 → Shopper
1 → Place Order
Enter: 001, Milk, 2
2 → Check Orders


------------------------

OPTION B — Inventory + Orders System

First move into folder:
cd FoodieForDaFam

Then compile EVERYTHING:
javac -d out $(find . -name "*.java")

Then run:
java -cp out Domain.GroceryOrderManager

Features:
- Loads inventory.txt
- Place / view / cancel orders
- Shows alerts


------------------------

OPTION C — User Demo

Run:
java -cp out FoodieForDaFam.Main


------------------------

OPTION D — Compile Everything (if needed)

Run:
find . -name "*.java" | xargs javac -d out/


========================
HOW TO TEST
========================

1. Start ConsoleUserInterface
2. Choose Shopper
3. Place Order:
   ID: 001
   Item: Milk
   Quantity: 2
4. Check Orders → confirm it saved
5. Edit inventory.txt → test alerts
6. Press 0 to exit


========================
FUTURE PLANS
========================

- React Frontend (planned)
  - Pages: Home, Register, Login, Orders
  - Stack: React + Vite + TypeScript + Tailwind
  - Will connect via API (Spring Boot or Quarkus)

- Real Database (MySQL/PostgreSQL)
- Full API endpoints


========================
GITIGNORE
========================

out/
*.class
.DS_Store
FoodieForDaFam/out/
