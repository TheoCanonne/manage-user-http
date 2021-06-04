import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import {take} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  addUser(user: IUser) {
    this.userService.addUser(user).pipe(take(1)).subscribe((res) => {
      alert(`L\'utilisateur ${user.name} a bien été ajouté`);
      this.router.navigateByUrl('/list-users');
    });
  }
}
