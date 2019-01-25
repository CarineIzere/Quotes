import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  Quotes = "Watch Finding Nemo";
  quotes: string[];
  constructor() {
    this.quotes = ["quotes and author", "lovely quotes ", "not loved quotes"];
  }
}
