import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], field: string, value: string): any [] {
    if (!movies) {
      return[];
    }
    if (!value) {
      return movies;
    }

    const myPattern = new RegExp(value, 'i');

    // tslint:disable-next-line:no-shadowed-variable
    return movies.filter(products => movies[field].match(myPattern));
  }

}