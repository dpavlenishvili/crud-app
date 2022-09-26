import {Component, Input} from '@angular/core';
import {OrganizationDto} from "../../interfaces/organization";

@Component({
  selector: 'app-organization-card',
  templateUrl: './organization-card.component.html',
  styleUrls: ['./organization-card.component.scss']
})
export class OrganizationCardComponent {
  @Input() organization: OrganizationDto | undefined;
}
