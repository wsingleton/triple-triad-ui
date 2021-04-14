import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'castToHandIndex'
})
export class CastToHandIndexPipe implements PipeTransform {

  transform(value: number): 0 | 1 | 2 | 3 | 4 {
    if (value < 0 || value > 4) throw new Error('Invalid index given!');
    return <0 | 1 | 2 | 3 | 4>value;
  }

}
