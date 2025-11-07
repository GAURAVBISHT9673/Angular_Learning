import { Component } from '@angular/core';
import { IndianState, IndianStates } from '../global/indian-state';


@Component({
  selector: 'app-bill-entry-form',
  imports: [],
  templateUrl: './bill-entry-form.component.html',
  styleUrl: './bill-entry-form.component.scss'
})
export class BillEntryFormComponent {

  states: IndianState[] = IndianStates;
  

}
