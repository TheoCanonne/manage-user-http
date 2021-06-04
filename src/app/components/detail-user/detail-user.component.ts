import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss'],
})
export class DetailUserComponent implements OnChanges {
  @Input() user?: IUser | null;
  @Output() userSubmitted = new EventEmitter<IUser>();

  public userForm = new FormBuilder().group({
    id: null,
    name: [null, Validators.required],
    username: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, Validators.required],
  });

  constructor() {}

  ngOnChanges(): void {
    if (this.user) {
      this.userForm.setValue({
        id: this.user.id,
        name: this.user.name,
        username: this.user.username,
        email: this.user.email,
        phone: this.user.phone,
      });
    }
  }

  submit(): void {
    this.userForm.markAllAsTouched();
    if (this.userForm.valid) {
      this.userSubmitted.next({ ...this.user, ...this.userForm.value });
    }
  }

  isErroredControl(control: AbstractControl) {
    return control.touched && control.errors;
  }
}
