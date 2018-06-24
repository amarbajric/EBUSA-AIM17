import {Pipe, PipeTransform} from '@angular/core';

// https://stackoverflow.com/a/44764070

@Pipe({
  name: 'simpleSearch',
})
export class SimpleSearchPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {

    if (!term) return value;
    return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

  }
}
