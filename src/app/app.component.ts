import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  options: string[] = [
    "Apple",
    "Chocolate",
    "Banana",
    "Beer",
    "Coffee",
    "Bread",
    "Beef",
    "Eggs"
  ].sort();
  searchTerm: string = "";
  isPickListVisible: boolean = false;
  showPickList(): boolean {
    return (this.isPickListVisible = true);
  }
  hidePickList(): boolean {
    return (this.isPickListVisible = !this.isPickListVisible);
  }
  select($event): void {
    this.searchTerm = $event.target.innerHTML.trim();
    this.hidePickList();
  }
  clearSearch(): void {
    this.searchTerm = "";
    this.isPickListVisible = true;
  }
}
