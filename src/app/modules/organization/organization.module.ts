import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsComponent } from './pages/organizations/organizations.component';
import { OrganizationRoutingModule } from "./organization-routing.module";
import { OrganizationCardComponent } from './components/organization-card/organization-card.component';



@NgModule({
  declarations: [
    OrganizationsComponent,
    OrganizationCardComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
