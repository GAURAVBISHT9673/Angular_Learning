import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input, Pipe } from '@angular/core';
import { InvestmentService } from '../../service/investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  // @Input({required: true}) results?:{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  private investmentService = inject(InvestmentService)

  get results(){
    return this.investmentService.resultsData;
  }


}
