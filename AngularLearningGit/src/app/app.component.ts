import { Component } from '@angular/core';
import { SampleTestService } from './services/sample-test.service';
import { Data } from './interfaces/data';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularLearningGit';

  data: string[] =[] ;

  post: Data[] = [];

  constructor(private service: SampleTestService) {
    this.data = this.service.getdata();
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe({
      next: (response: Data[]) => {
        this.post = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  } 

}
