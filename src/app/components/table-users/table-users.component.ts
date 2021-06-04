import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss'],
})
export class TableUsersComponent implements OnInit {
  @Input() users: IUser[] | null = null;
  @Output() deleteUser = new EventEmitter<IUser>();

  constructor() {}

  ngOnInit(): void {}


}
