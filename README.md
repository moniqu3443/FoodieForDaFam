FoodieForDaFam

Family food app connecting chefs, shoppers, and volunteers for home meals.
Java CLI Backend (fully functional)

Website Template (Figma):
https://guard-book-56368466.figma.site/l

CURRENT STATUS

Backend (Java CLI):

ConsoleUserInterface → Interactive role menus (Shopper orders working)
FoodieForDaFam.Main → User registration + polymorphism demo
GroceryOrderManager → Inventory + order system using inventory.txt

SETUP AND RUN

PREREQUISITES
Run in terminal:
java -version

Requirement: JDK 21+

CLONE REPOSITORY
Run:
git clone https://github.com/moniqu3443/FoodieForDaFam.git

Then:
cd FoodieForDaFam

RUN THE PROGRAMS

OPTION A — CONSOLE UI (RECOMMENDED)

Run:
javac -d out ConsoleUserInterface.java
java -cp out ConsoleUserInterface

Inside the program:
1 → Shopper
1 → Place Order
Enter: 001, Milk, 2
2 → Check Orders

OPTION B — INVENTORY AND ORDERS SYSTEM

Run:
cd FoodieForDaFam
javac -d out $(find . -name "*.java")
java -cp out Domain.GroceryOrderManager

Features:

Loads inventory.txt
Place, view, and cancel orders
Displays alerts

OPTION C — USER DEMO

Run:
java -cp out FoodieForDaFam.Main

OPTION D — COMPILE EVERYTHING

Run:
find . -name "*.java" | xargs javac -d out/

HOW TO TEST

Run ConsoleUserInterface
Select 1 (Shopper)
Select 1 (Place Order)
Enter:
ID: 001
Item: Milk
Quantity: 2
Select 2 (Check Orders) to confirm it saved
Edit inventory.txt to test alerts
Press 0 to exit

FUTURE PLANS

React Frontend
Pages: Home, Register, Login, Orders
Stack: React + Vite + TypeScript + Tailwind
Backend connection: Spring Boot or Quarkus
Database integration (MySQL or PostgreSQL)
Full API endpoints

GITIGNORE

out/
*.class
.DS_Store
FoodieForDaFam/out/
