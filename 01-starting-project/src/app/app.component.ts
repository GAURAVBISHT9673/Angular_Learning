import { Component, inject, Input, input } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentInput } from '../model/investment.model';
import { calculateInvestmentResults } from '../investment-results';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { InvestmentService } from '../service/investment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {

  
  invest = inject(InvestmentService)

  

}
