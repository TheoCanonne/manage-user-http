import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  public users: IUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUsers().pipe(take(1)).subscribe((res) => {
      this.users = res;
    })
  }

  deleteUser(user: IUser) {
    this.userService.deleteUser(user.id).subscribe(() => {
      alert(`L'utilisateur ${user.name} a bien été supprimé`);
      this.loadUser();
    })
  }
}
