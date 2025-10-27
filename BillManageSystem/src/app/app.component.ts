import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSideNavBarComponent } from "./left-side-nav-bar/left-side-nav-bar.component";


@Component({
    selector: 'app-root',
    imports: [LeftSideNavBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'BillManageSystem';
}
