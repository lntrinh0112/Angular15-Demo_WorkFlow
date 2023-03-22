import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply a test',
      'https://4.bp.blogspot.com/-tQB92LPTHkw/VrRg9FFZHMI/AAAAAAAABT0/kpdOULpzmno/s1600/20160205_134515.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a simply a test',
      'https://4.bp.blogspot.com/-tQB92LPTHkw/VrRg9FFZHMI/AAAAAAAABT0/kpdOULpzmno/s1600/20160205_134515.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a simply a test',
      'https://4.bp.blogspot.com/-tQB92LPTHkw/VrRg9FFZHMI/AAAAAAAABT0/kpdOULpzmno/s1600/20160205_134515.jpg'
    ),
  ];

  ngOnInit() {}
}
