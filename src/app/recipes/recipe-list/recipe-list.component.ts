import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test', 'https://cookieandkate.com/images/2021/12/green-enchilada-sauce-recipe-2-768x1152.jpg'),
    new Recipe('A Test Recipe', 'Test', 'https://cookieandkate.com/images/2021/12/green-enchilada-sauce-recipe-2-768x1152.jpg')
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
