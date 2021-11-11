import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page1Component} from "./pages/page1/page1.component";
import {Page2Component} from "./pages/page2/page2.component";

const routes: Routes = [
  {path: 'uno', component: Page1Component},
  {path: 'due', component: Page2Component},
  {path: 'diet', data: {api: 'http://ewell/dev'}, loadChildren: () => import('dietFe/Module').then(m => m.RootModule)},
  {path: '**', redirectTo: '/uno', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
