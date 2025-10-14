import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-left-side-nav-bar',
  imports: [RouterLink, NgClass],
  templateUrl: './left-side-nav-bar.component.html',
  styleUrl: './left-side-nav-bar.component.scss'
})
export class LeftSideNavBarComponent {

  iconName: string = 'bx-chevron-down';
  showMenu: string = '';
  toggleIcon() {
    console.log("Icon clicked");
    this.iconName = this.iconName === 'bx-chevron-down' ? 'bx-chevron-up' : 'bx-chevron-down';
    this.showMenu = this.showMenu === '' ? 'showMenu' : '';
  }

}
