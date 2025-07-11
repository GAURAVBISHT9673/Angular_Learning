import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye,faHeart, } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  faEye = faEye;
  faHeart = faHeart;
  faShoppingBag = faShoppingBag
  // faCartPlus = 'fa fa-cart-plus';

  products = [
    {
      route: ' ',
      img: 'product-1-1.jpg',
      title: 'T-Shirt',
    },
    {
      route: ' ',
      img: 'product-1-2.jpg',
      title: 'Bags',
    },
    {
      route: ' ',
      img: 'product-1-1.jpg',
      title: 'Sandal',
    },
    {
      route: ' ',
      img: 'category-4.jpg',
      title: 'Scarf Cap',
    },
    {
      route: ' ',
      img: 'category-5.jpg',
      title: 'Shoes',
    },
    {
      route: ' ',
      img: 'category-6.jpg',
      title: 'Pillowcase',
    },
    {
      route: ' ',
      img: 'category-7.jpg',
      title: 'Jumpsuit',
    },
    {
      route: ' ',
      img: 'category-8.jpg',
      title: 'Hats',
    },
  ];
  
}
