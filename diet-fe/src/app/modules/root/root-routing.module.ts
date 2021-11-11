import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from "./root.component";
import {ApiResolver} from "./resolvers/api.resolver";
import {StatusComponent} from "./pages/status/status.component";
import {PlannerComponent} from "./pages/planner/planner.component";

const routes: Routes = [
  {
    path: '', resolve: [ApiResolver], component: RootComponent, children: [
      {path: 'status', component: StatusComponent},
      {path: 'planner', component: PlannerComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule {
}
