import { Pipe, PipeTransform } from '@angular/core';
import { Card } from "src/app/components/models"
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // Фильтр для поиска заметок по заголовку
  transform(items: Array<Card>, searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.header.toLocaleLowerCase().includes(searchText);
    });
  }

}
