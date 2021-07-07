import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(item: any, searchValue?: any) {
    if (!searchValue.title) {
      return item;
    }
    let list = item.filter((e: any) =>
      e.title.toLowerCase().includes(searchValue.title.toLowerCase())
    );
    return list;
  }
}
