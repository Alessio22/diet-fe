import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {api: 'http://diet/dev'},
    loadChildren: () => import('./modules/root/root.module').then(m => m.RootModule)
  },
  {path: '**', redirectTo: '/status', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
