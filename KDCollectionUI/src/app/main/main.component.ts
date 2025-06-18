import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainComponent {

  categories=[
    {
      route:' ',
      img: 'category-1.jpg',
      title:'T-Shirt'
    },
    {
      route:' ',
      img: 'category-2.jpg',
      title:'Bags'
    },
    {
      route:' ',
      img: 'category-3.jpg',
      title:'Sandal'
    },
    {
      route:' ',
      img: 'category-4.jpg',
      title:'Scarf Cap'
    },
    {
      route:' ',
      img: 'category-5.jpg',
      title:'Shoes'
    },
    {
      route:' ',
      img: 'category-6.jpg',
      title:'Pillowcase'
    },
    {
      route:' ',
      img: 'category-7.jpg',
      title:'Jumpsuit'
    },
    {
      route:' ',
      img: 'category-8.jpg',
      title:'Hats'
    },
]
  
}
