package Domain;

// NOTE: Chef class sets role to Role.CHEF. See `Domain/User.java` for login/logout/updateProfile implementation.
// Completed: Role assignment done in constructor.

import java.util.List;
import java.util.ArrayList;

public class Chef extends User {
    private List<Recipe> recipes;

    public Chef() {
        super("", "chef", "", Role.CHEF);
        this.recipes = new ArrayList<>();
    }

    public void createRecipe() {}
    public void editRecipe() {}
    public void shareRecipe() {}

    public List<Recipe> getRecipes() { return recipes; }
    public void setRecipes(List<Recipe> recipes) { this.recipes = recipes; }
}
