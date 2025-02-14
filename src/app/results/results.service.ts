import { Injectable } from '@angular/core';
import { Result } from './results.model';
import type { InputFields } from '../input/input.model';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private results: Result[] = [];

  getResults() {
    return this.results;
  }

  calculateResults(input: InputFields) {
    console.log('Calculating results...');

    // Clean previous results
    this.results = [];

    console.log(input);

    let investedCapital = input.initialInvestment + input.annualInvestment;
    const interestRate = input.expectedReturn;
    let totalInterest = 0;
    let interestYear = 0;

    for (let i = 0; i < input.duration; i++) {
      const newInterest = (investedCapital * interestRate) / 100;
      totalInterest = interestYear + newInterest;
      interestYear = newInterest;
      let investedValue = investedCapital + totalInterest;

      const newResults: Result = {
        year: i + 1,
        investmentValue: investedValue,
        interestYear: interestYear,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
      };

      investedCapital += input.annualInvestment;

      this.results.push(newResults);
    }
  }
}
