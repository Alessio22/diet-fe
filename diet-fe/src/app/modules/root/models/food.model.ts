export interface FoodModel {
  id: string;
  name: string;
  category?: FoodCategoryModel;
}

export interface FoodCategoryModel {
  id: string;
  name: string;
}
