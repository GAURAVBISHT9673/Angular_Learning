import { Component  } from "@angular/core";

@Component({
    selector: 'app-header',
    // template: '<h1>Hello World</h1>'
    standalone: true, // By Default it is True for Angular 19 and above
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent{

}