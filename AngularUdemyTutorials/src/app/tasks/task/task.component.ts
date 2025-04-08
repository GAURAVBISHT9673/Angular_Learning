import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  // @Input({required:true}) userId!: string;
  @Input({required: true}) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private taskService = inject(TaskService);
  onCompleteTask(){
    // this.complete.emit(this.task.id);
    this.taskService.removeTask(this.task.id);
  }



}
