import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationsComponent} from './pages/organizations/organizations.component';
import {OrganizationRoutingModule} from "./organization-routing.module";
import {OrganizationCardComponent} from './components/organization-card/organization-card.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {OrganizationFormComponent} from './components/organization-form/organization-form.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    OrganizationsComponent,
    OrganizationCardComponent,
    OrganizationFormComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class OrganizationModule { }
