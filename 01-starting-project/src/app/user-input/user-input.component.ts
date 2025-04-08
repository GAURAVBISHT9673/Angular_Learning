import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../model/investment.model';
import { InvestmentService } from '../../service/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() calculate = new EventEmitter<InvestmentInput>();

  private investmentService = inject(InvestmentService)

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit(){
    // console.log('Submitted the Form');

    this.investmentService.onCalculateInvestmentResult({
      initialInvestment: + this.enteredInitialInvestment,
      annualInvestment: + this.enteredAnnualInvestment,
      expectedReturn: + this.enteredExpectedReturn,
      duration: + this.enteredDuration
    })    
  }

}
