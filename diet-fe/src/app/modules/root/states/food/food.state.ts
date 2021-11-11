import {Injectable} from '@angular/core';
import {Action, createSelector, Selector, State, StateContext} from '@ngxs/store';
import {FoodCategoryModel, FoodModel} from "../../models/food.model";
import {FoodActions} from "./food.actions";

interface FoodStateModel {
  foods: FoodModel[];
}

@State<FoodStateModel>({
  name: 'food',
  defaults: {
    foods: []
  }
})
@Injectable()
export class FoodState {

  @Selector()
  static categories(state: FoodStateModel): FoodCategoryModel[] {
    return state.foods
      .filter(food => !!food.category)
      .reduce((acc: FoodCategoryModel[], food: FoodModel) => {
        if (acc.findIndex(c => c === food.category) !== -1) {
          return acc;
        }
        return ([...acc, food.category!]);
      }, []);
  }

  static foodsByCategory(category: FoodCategoryModel) {
    return createSelector([FoodState], (state: FoodStateModel) => {
      return state.foods.filter(food => food.category && food.category.id === category.id);
    });
  }

  @Action(FoodActions.SetFoods)
  increment(ctx: StateContext<FoodStateModel>, action: FoodActions.SetFoods) {
    ctx.setState({foods: action.foods})
  }

}
