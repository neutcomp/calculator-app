import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultsService } from '../results/results.service';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  initialInvestment = '1000';
  annualInvestment = '100';
  expectedReturn = '10';
  duration = '10';

  private resultService = inject(ResultsService);

  onSubmit() {
    this.resultService.calculateResults({
      initialInvestment: parseInt(this.initialInvestment),
      annualInvestment: parseInt(this.annualInvestment),
      expectedReturn: parseInt(this.expectedReturn),
      duration: parseInt(this.duration),
    });
  }
}
