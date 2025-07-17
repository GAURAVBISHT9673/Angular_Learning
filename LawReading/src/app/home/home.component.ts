import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from 'express';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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
