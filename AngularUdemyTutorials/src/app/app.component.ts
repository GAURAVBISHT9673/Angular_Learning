import { Component, computed, Input, Output } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
// import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  // standalone: true,
  standalone: false,
  // imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'AngularUdemyTutorials';

  users = DUMMY_USERS


  // userid : string='';
  selectedUserId ?: string;

  // onSelectedUser = ((id: string)=>{
  //   return id;
  // });

  get selectedUser(){
    return this.users.find((user)=> user.id === this.selectedUserId)!;
  }

  onSelectedUser(id:string){
    console.log('Selected user with id ' + id);
    this.selectedUserId = id;
  }


}
