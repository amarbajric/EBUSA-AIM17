import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'processFilter',
})
export class ProcessFilterPipe implements PipeTransform {
  public transform(value, filterInput: string, filterType: string) {

    if (!filterInput || !filterType) return value;

    if (filterType === 'none') {
      return value
    } else if (filterType === 'priceBelowOrEquals') {
      const key = 'processPrice';
      return (value || []).filter(
        (item) => (item.hasOwnProperty(key) && item[key] <= filterInput),
      );
    } else if (filterType === 'ratingAboveOrEquals') {
      const key = 'processAverageRating';
      return (value || []).filter(
        (item) => (item.hasOwnProperty(key) && item[key] >= filterInput),
      );
    } else if (filterType === 'createdBy') {
      const key = 'processCreator';
      return (value || []).filter(
        (item) => (item.hasOwnProperty(key) && item[key].includes(filterInput)),
      );
    }

  }
}
