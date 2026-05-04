# FoodieForDaFam 🥘👨‍🍳

Family food app connecting chefs, shoppers, volunteers for home meals. **Java CLI Backend** (fully functional).

## Current Status
- **Backend**: Java CLI apps with roles, inventory management, grocery orders, alerts.
  - `ConsoleUserInterface`: Interactive role menus (Shopper orders work!).
  - `FoodieForDaFam.Main`: User registration + polymorphism demo.
  - `FoodieForDaFam.Domain.GroceryOrderManager`: Full inventory/orders from inventory.txt.

## Step-by-Step Setup & Run

### 1. Prerequisites
```
java -version  # JDK 21+
```

### 2. Clone
```bash
git clone https://github.com/moniqu3443/FoodieForDaFam.git
cd FoodieForDaFam
```

### 3. Backend Demos (Terminal: Ctrl+`)

**Primary: ConsoleUserInterface (Shopper Orders)**
```bash
javac -d out ConsoleUserInterface.java
java -cp out ConsoleUserInterface
```
- `1` (Shopper) → `1` Place Order (ID/SKU/Qty) → `2` Check Orders. **Working!**

**Inventory & Orders:**
```bash
cd FoodieForDaFam
javac -d out \$(find . -name "*.java")
java -cp out Domain.GroceryOrderManager
```
- Loads `inventory.txt`, place/view/cancel orders + alerts.

**User Demo:**
```bash
java -cp out FoodieForDaFam.Main  # From FoodieForDaFam/
```

**Compile All:** `find . -name "*.java" | xargs javac -d out/`

## How To Test
1. Run ConsoleUserInterface → Shopper → Place Order: `001`, `Milk`, `2` → Success.
2. Check Orders → Lists saved orders.
3. Edit `FoodieForDaFam/inventory.txt` → Test alerts.
4. `0` Exit.

## Future Plans
- **React Frontend** (planned): Connect to Java CLI via API layer (Spring Boot/Quarkus).
  - Pages: Home, Register, Login, Orders.
  - Stack: React + Vite + TypeScript + Tailwind.
- Real DB (MySQL/PostgreSQL).
- Full API endpoints.

## .gitignore
```
out/
*.class
.DS_Store
FoodieForDaFam/out/
```



