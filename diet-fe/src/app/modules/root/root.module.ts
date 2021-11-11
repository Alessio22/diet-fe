import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RootRoutingModule} from './root-routing.module';
import {RootComponent} from './root.component';
import {StatusComponent} from './pages/status/status.component';
import {PlannerComponent} from './pages/planner/planner.component';
import {FoodInformationComponent} from "./components/food-information/food-information.component";
import {FoodCategoryComponent} from "./components/food-category/food-category.component";

@NgModule({
  declarations: [
    RootComponent,
    StatusComponent,
    PlannerComponent,
    FoodInformationComponent,
    FoodCategoryComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
  ]
})
export class RootModule {
}
