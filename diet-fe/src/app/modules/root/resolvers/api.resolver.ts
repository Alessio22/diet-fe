import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ConfigService} from "../services/config.service";
import {FoodService} from "../services/food.service";

@Injectable({
  providedIn: 'root'
})
export class ApiResolver implements Resolve<boolean> {
  constructor(
    private configService: ConfigService,
    private foodService: FoodService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.configService.config) {
      this.configService.config = route.data
      this.foodService.fetchFoods()
    }
    return of(true);
  }
}
