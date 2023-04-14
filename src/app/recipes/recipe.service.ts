import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
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

  recipeSelected = new Subject<Recipe>();
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
