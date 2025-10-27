import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BillEntryFormComponent } from '../bill-entry-form/bill-entry-form.component';


@Component({
  selector: 'app-left-side-nav-bar',
  imports: [BillEntryFormComponent],
  templateUrl: './left-side-nav-bar.component.html',
  styleUrl: './left-side-nav-bar.component.scss'
})
export class LeftSideNavBarComponent {

  iconName: string = 'bx-chevron-down';
  showMenu: string = '';
  iconChanged: boolean = false;
  toggleIcon(event: Event ): void {
    const arrowElement = (event.target as HTMLElement);
    const parentElement = arrowElement.parentElement?.parentElement;
    parentElement?.classList.toggle('showMenu');    
    // this.iconName = this.iconName === 'bx-chevron-down' ? 'bx-chevron-up' : 'bx-chevron-down';
    // this.showMenu = this.showMenu === '' ? 'showMenu' : '';
  }

  bxMenuToggle(): void {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.toggle('close');
  }

}
