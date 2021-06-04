import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent {
  public user$: Observable<IUser>;

  constructor(
    private userService: UserService,
    private router: Router,
    private ar: ActivatedRoute
  ) {
    const id = this.ar.snapshot.params['id'];
    this.user$ = this.userService.getUser(id);
  }

  updateUser(user: IUser) {
    this.userService
      .updateUser(user)
      .pipe(take(1))
      .subscribe(() => {
        alert(`L'utilisateur ${user.name} a bien été modifié`);
        this.router.navigateByUrl('/list-users');
      });
  }
}
