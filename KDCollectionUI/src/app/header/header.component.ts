import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

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
