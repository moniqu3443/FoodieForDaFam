# 🍽️ FoodieForDaFam

Family food app connecting chefs, shoppers, and volunteers for home meals.
Java CLI Backend (fully functional)

Website Template (Figma):
https://guard-book-56368466.figma.site/


--------------------------------------------------
CURRENT STATUS
--------------------------------------------------

Backend (Java CLI)
- ConsoleUserInterface → Interactive role menus (Shopper orders working)
- FoodieForDaFam.Main → User registration + polymorphism demo
- GroceryOrderManager → Inventory + order system using inventory.txt


--------------------------------------------------
SETUP & RUN
--------------------------------------------------

1. Prerequisites

Run in terminal:
java -version

Requires JDK 21+


2. Clone the Repository

Run:
git clone https://github.com/moniqu3443/FoodieForDaFam.git

Then:
cd FoodieForDaFam


--------------------------------------------------
RUN THE PROGRAMS
--------------------------------------------------

OPTION A — Console UI (Recommended)

Run:
javac -d out ConsoleUserInterface.java
java -cp out ConsoleUserInterface

Then in the app:
1 → Shopper
1 → Place Order
Enter: 001, Milk, 2
2 → Check Orders


------------------------------

OPTION B — Inventory & Orders System

Run:
cd FoodieForDaFam
javac -d out $(find . -name "*.java")
java -cp out Domain.GroceryOrderManager

Features:
- Loads inventory.txt
- Place / view / cancel orders
- Inventory alerts


------------------------------

OPTION C — User Demo

Run:
java -cp out FoodieForDaFam.Main


------------------------------

OPTION D — Compile Everything

Run:
find . -name "*.java" | xargs javac -d out/


--------------------------------------------------
HOW TO TEST
--------------------------------------------------

1. Run ConsoleUserInterface
2. Select:
   1 → Shopper
   1 → Place Order

3. Enter:
   ID: 001
   Item: Milk
   Quantity: 2

4. Select:
   2 → Check Orders (confirm saved)

5. Edit inventory.txt to test alerts

6. Press 0 to exit


--------------------------------------------------
FUTURE PLANS
--------------------------------------------------

- React Frontend
  Pages: Home, Register, Login, Orders
  Stack: React + Vite + TypeScript + Tailwind
  Backend: Spring Boot or Quarkus

- Database Integration
  MySQL or PostgreSQL

- Full REST API


--------------------------------------------------
GITIGNORE
--------------------------------------------------

out/
*.class
.DS_Store
FoodieForDaFam/out/
