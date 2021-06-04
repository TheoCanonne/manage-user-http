import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'list-user', component: ListUsersComponent
  },
  {
    path: 'add-user', component: AddUserComponent
  },
  {
    path: 'update-user/:id', component: UpdateUserComponent
  },
  {
    path: '**', redirectTo: 'list-user', pathMatch: 'full'
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListUsersComponent,
    DetailUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    TableUsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
