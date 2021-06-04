import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';

const baseUrl = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<IUser> {
    const url = baseUrl + '/users/' + id;
    return this.http.get<IUser>(url);
  }
  getUsers(): Observable<IUser[]> {
    const url = baseUrl + '/users';
    return this.http.get<IUser[]>(url);
  }

  addUser(user: IUser) {
    const url = baseUrl + '/users';
    return this.http.post<IUser>(url, user);
  }

  updateUser(user: IUser) {
    const {id, ...userToUpdate} = user;
    const url = baseUrl + '/users/' + id;
    return this.http.put<IUser>(url, userToUpdate);
  }

  deleteUser(id: number) {
    const url = baseUrl + '/users/' + id;
    return this.http.delete<IUser>(url);
  }
}
