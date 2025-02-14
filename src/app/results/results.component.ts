import { Component, inject } from '@angular/core';
import { ResultsService } from './results.service';
import { CurrencyPipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/nl';
registerLocaleData(localeFr, 'nl');

@Component({
  selector: 'app-results',
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {
  private resultService = inject(ResultsService);

  getResults() {
    return this.resultService.getResults();
  }
}
