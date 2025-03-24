import { Component, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../user/dummy-users';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  // @Input({required:true}) id !: string;
  @Input({required: true}) name ?: string;
  // name : string = "Task Component";


  // name = DUMMY_USERS.find(user => user.id === this.id);
  
  


}
