import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.module';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test 1 Recipe',
      'This is a simply a test',
      'https://4.bp.blogspot.com/-tQB92LPTHkw/VrRg9FFZHMI/AAAAAAAABT0/kpdOULpzmno/s1600/20160205_134515.jpg',
      [new Ingredient('Meat', 5), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'A Test 2 Recipe',
      'This is a simply a test',
      'https://4.bp.blogspot.com/-tQB92LPTHkw/VrRg9FFZHMI/AAAAAAAABT0/kpdOULpzmno/s1600/20160205_134515.jpg',
      [new Ingredient('fish', 3), new Ingredient('Rice', 2)]
    ),
    new Recipe(
      'A Test 3 Recipe',
      'This is a simply a test',
      'https://4.bp.blogspot.com/-tQB92LPTHkw/VrRg9FFZHMI/AAAAAAAABT0/kpdOULpzmno/s1600/20160205_134515.jpg',
      [new Ingredient('Cha Lua', 10), new Ingredient('Bun', 100)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
