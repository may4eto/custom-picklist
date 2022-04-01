import { Component, Input } from "@angular/core";

@Component({
  selector: "chevron",
  templateUrl: "./chevron.component.html",
  styleUrls: ["./chevron.component.css"]
})
export class ChevronComponent {
  @Input() isChevronUp: boolean;
}
