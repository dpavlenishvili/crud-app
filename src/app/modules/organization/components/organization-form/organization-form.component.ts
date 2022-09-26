import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ImageSnippet} from "../../interfaces/organization";
import {OrganizationService} from "../../services/organization.service";
import {organizationForm} from "./form";
import {MatDialog} from "@angular/material/dialog";
import {tap} from "rxjs";

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.scss']
})
export class OrganizationFormComponent implements OnInit {
  form: FormGroup = organizationForm()

  constructor(
    private organizationService: OrganizationService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      const selectedFile = new ImageSnippet(event.target.result, file);
      this.form.patchValue({
        file: selectedFile
      })
    });

    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.organizationService.createOrganization(this.form.value)
      .pipe(tap(() => this.dialog.closeAll()))
      .subscribe()
  }
}
