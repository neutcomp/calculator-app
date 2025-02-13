import { Component, input, output } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ElementComponent } from "./element/element.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, ElementComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  close = output<void>();
  fieldNamefirst = input<string>;
  fieldNamesecond = input<string>;

  result = "leeg";

  calculateScore() {
    this.result = "gevuld";

    this.close.emit();
  }
}
