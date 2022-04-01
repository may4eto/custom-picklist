import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FilterPipe } from "./filter.pipe";
import { ChevronComponent } from "./chevron.component";
import { CloseComponent } from "./close.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent, FilterPipe, ChevronComponent, CloseComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
