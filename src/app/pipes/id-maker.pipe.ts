import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idMaker'
})
export class IdMakerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/\s+/g, '').toLowerCase();
  }

}
