import {FormControl, FormGroup} from "@angular/forms";

export function organizationForm() {
  return new FormGroup<any>({
    name: new FormControl(),
    tracking: new FormGroup({
      usage: new FormControl(),
      assigned: new FormControl()
    }),
    protection: new FormGroup({
      usage: new FormControl(),
      assigned: new FormControl()
    }),
    file: new FormControl()
  });
}
