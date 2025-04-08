import { Injectable } from "@angular/core";
import { InvestmentInput } from "../model/investment.model";
import { calculateInvestmentResults } from "../investment-results";

@Injectable({
    providedIn: 'root'
})
export class InvestmentService{

    resultsData?: {
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
      }[];

    onCalculateInvestmentResult(data: InvestmentInput){

        this.resultsData = calculateInvestmentResults(data);
        // console.log(calculateInvestmentResults(data));
    
      }

}