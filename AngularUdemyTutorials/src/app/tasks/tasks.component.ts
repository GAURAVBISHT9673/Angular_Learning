import { Component, Input, Output } from '@angular/core';
import { DUMMY_TASKS } from './dummy-task';
import { TaskComponent } from './task/task.component';
import { NewtaskComponent } from "./newtask/newtask.component";
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  // @Input({required:true}) id !: string;
  @Input({required: true}) userId!: string;
  @Input({required: true}) name !: string;
  // name : string = "Task Component";
  showapp_newTask : boolean = false;

  // name = DUMMY_USERS.find(user => user.id === this.id);
  tasks = DUMMY_TASKS;
  
  get selectedUsertasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task)=> task.id !== id); 
  }

  onShowTask(){
    this.showapp_newTask = true;
  }

  onCancelAddTask(){
    this.showapp_newTask = false;
  }

  onAddTask(taskData: NewTaskData){
    // this.tasks.push({
    //   id: new Date().getTime().toString(),
    //   title: taskData.title,
    //   summary: taskData.summary,
    //   dueDate: taskData.date,
    //   userId: this.userId
    // });
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: this.userId
    });
    this.showapp_newTask = false;
  }

}
