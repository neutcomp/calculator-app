import { Component, input, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-element",
  imports: [FormsModule],
  templateUrl: "./element.component.html",
  styleUrl: "./element.component.css",
})
export class ElementComponent {
  name = input.required<string>();
  fieldValue = output<string>();
}
