import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients : Ingredient[] = [
    new Ingredient('Apples', 2)
  ];


  addIngredients(Ingredient){
    this.ingredients.push(Ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());

  }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredientsToList(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  updateIngredient(index:number, newIngredient:Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }


}
