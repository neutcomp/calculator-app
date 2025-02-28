import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { ResultsComponent } from './results/results.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, InputComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
