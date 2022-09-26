import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'organizations',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'organizations',
        loadChildren: () => import('./modules/organization/organization.module').then(m => m.OrganizationModule)
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
