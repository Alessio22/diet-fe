import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FoodCategoryModel} from "../../models/food.model";
import {FoodService} from "../../services/food.service";

@Component({
  selector: 'diet-food-information,[diet-food-information]',
  templateUrl: './food-information.component.html',
  styleUrls: ['./food-information.component.css']
})
export class FoodInformationComponent implements OnInit {

  categories$?: Observable<FoodCategoryModel[]>;

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.categories$ = this.foodService.categories$;
  }

}
