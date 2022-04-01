import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(options: string[], searchTerm: string) {
    if (options && searchTerm) {
      return options.filter(
        (option) => option.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0
      );
    } else {
      return options;
    }
  }
}
