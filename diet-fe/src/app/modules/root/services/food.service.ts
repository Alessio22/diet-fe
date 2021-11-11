import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {FoodCategoryModel, FoodModel} from "../models/food.model";
import {delay, map} from "rxjs/operators";

const categories: FoodCategoryModel[] = [
  {id: '1', name: 'Alimenti preferiti'},
  {id: '2', name: 'Alimenti meno graditi'},
  {id: '3', name: 'Allergie'},
  {id: '4', name: 'Intolleranze'},
]

const foods: FoodModel[] = [
  {id: '1', name: 'Insalata', category: categories[0]},
  {id: '2', name: 'Pesce bianco', category: categories[0]},
  {id: '3', name: 'Ciliege', category: categories[0]},
  {id: '4', name: 'Latte', category: categories[1]},
  {id: '5', name: 'Carne rosse', category: categories[1]},
  {id: '6', name: 'Banane', category: categories[1]},
  {id: '7', name: 'Frutti di mare', category: categories[2]},
  {id: '8', name: 'Fragola', category: categories[2]},
  {id: '9', name: 'Arachidi', category: categories[2]},
  {id: '10', name: 'Diossido di zolfo', category: categories[2]},
  {id: '11', name: 'Coloranti alimentari', category: categories[3]},
  {id: '12', name: 'Glutine', category: categories[3]},
  {id: '13', name: 'Tiramisù'},
]

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foods$: BehaviorSubject<FoodModel[]> = new BehaviorSubject<FoodModel[]>([])
  categories$: BehaviorSubject<FoodCategoryModel[]> = new BehaviorSubject<FoodCategoryModel[]>([])

  constructor() {
  }

  fetchFoods(): void {
    console.log('fetchFoods')
    of(foods).pipe(delay(500))
      .subscribe(foods => {
        this.foods$.next(foods);
        this.categories$.next(
          foods
            .filter(food => !!food.category)
            .reduce((acc: FoodCategoryModel[], food: FoodModel) => {
              if (acc.findIndex(c => c === food.category) !== -1) {
                return acc;
              }
              return ([...acc, food.category!]);
            }, [])
        );
      });
  }

  foodsByCategory(category: FoodCategoryModel): Observable<FoodModel[]> {
    return this.foods$.pipe(
      map(foods => foods.filter(food => food.category && food.category.id === category.id))
    )
  }

}
