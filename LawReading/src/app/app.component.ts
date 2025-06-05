import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'LawReading';

  blog=[
    {
      img: 'blog-p-1.webp',
      date: '20 January, 2020',
      heading: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
      subheading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.'
    },
    {
      img: 'blog-p-2.jpg',
      date: '20 January, 2020',
      heading: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
      subheading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.'
    },
    {
      img: 'blog-p-3.jpg',
      date: '20 January, 2020',
      heading: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
      subheading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat.'
    }
  ];


  changetheColor(){
    
  }


}
