import {Component, Input, OnInit} from '@angular/core';
import {FoodCategoryModel, FoodModel} from "../../models/food.model";
import {Observable} from "rxjs";
import {FoodService} from "../../services/food.service";

@Component({
  selector: 'diet-food-category,[diet-food-category]',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.css']
})
export class FoodCategoryComponent implements OnInit {

  @Input() category!: FoodCategoryModel;
  foods$!: Observable<FoodModel[]>

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.foods$ = this.foodService.foodsByCategory(this.category)
  }

}
