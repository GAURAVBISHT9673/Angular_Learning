import { Component, inject, Inject, Input, Output } from '@angular/core';
import { DUMMY_TASKS } from './dummy-task';
import { TaskComponent } from './task/task.component';
import { NewtaskComponent } from "./newtask/newtask.component";
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

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
  // private taskService = new TaskService();
  
  // name = DUMMY_USERS.find(user => user.id === this.id);
  

  //Property Injection
  private taskService = inject(TaskService);
  //OR
  //constructor Injection
  // constructor(private taskService :TaskService){

  // }
  
  get selectedUsertasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string){
  //   this.taskService.removeTask(this.userId);
  // }

  onShowTask(){
    this.showapp_newTask = true;
  }

  onCloseAddTask(){
    this.showapp_newTask = false;
  }

  // onAddTask(taskData: NewTaskData){
  //   // this.tasks.push({
  //   //   id: new Date().getTime().toString(),
  //   //   title: taskData.title,
  //   //   summary: taskData.summary,
  //   //   dueDate: taskData.date,
  //   //   userId: this.userId
  //   // });
    
  //   this.showapp_newTask = false;
  // }

}
