import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: any[], field: string, value: string): any [] {
    if (!movies) {
      return[];
    }
    if (!value) {
      return movies;
    }

    const myPattern = new RegExp(value, 'i');

    // tslint:disable-next-line:no-shadowed-variable
    return movies.filter(movies => movies[field].match(myPattern));
  }

}
