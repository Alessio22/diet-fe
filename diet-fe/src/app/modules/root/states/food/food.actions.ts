import {FoodModel} from "../../models/food.model";

export namespace FoodActions {
  export class SetFoods {
    static readonly type = '[Food] SetFoods';

    constructor(public foods: FoodModel[]) {
    }
  }
}
