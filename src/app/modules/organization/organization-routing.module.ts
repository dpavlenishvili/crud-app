import {RouterModule, Routes} from "@angular/router";
import {OrganizationsComponent} from "./pages/organizations/organizations.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: OrganizationsComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationRoutingModule {}
