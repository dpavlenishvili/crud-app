import {Component, OnInit} from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
  takeUntil,
  tap
} from "rxjs";
import {OrganizationService} from "../../services/organization.service";
import {OrganizationDto} from "../../interfaces/organization";
import {MatDialog} from "@angular/material/dialog";
import {OrganizationFormComponent} from "../../components/organization-form/organization-form.component";

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
  organizations$: Observable<OrganizationDto[]> | undefined;
  filter$ = new BehaviorSubject<string>('');
  destroying$: Subject<void> = new Subject<void>();

  filterValue: string | undefined;

  constructor(
    private organizationService: OrganizationService,
    public dialog: MatDialog
  ) {
    this.organizations$ = this.filter$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntil(this.destroying$),
      switchMap(key => organizationService.getOrganizations(key).pipe(
      )),
    );
  }

  ngOnInit(): void {

  }

  fetchOrganizations() {
    this.filterValue = '';
    this.filter$.next('')
  }

  onFilter(event: string) {
    this.filter$.next(event)
  }

  showAddModal() {
    const dialogRef = this.dialog.open(OrganizationFormComponent);

    dialogRef.afterClosed()
      .pipe(
        tap(() => this.fetchOrganizations())
      )
      .subscribe();
  }
}
