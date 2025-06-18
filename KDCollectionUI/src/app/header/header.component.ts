import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  faHeart = faHeart;
  faShoppingCart = faShoppingCart;

  links=[
    {
      link:'Home',
      redirect:''
    },
    {
      link:'Shop',
      redirect:''
    },
    {
      link:'My Account',
      redirect:''
    },
    {
      link:'Compare',
      redirect:''
    },
    {
      link:'Login',
      redirect:''
    }   
  
  ]

}
