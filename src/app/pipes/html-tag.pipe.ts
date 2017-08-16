import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlTag'
})
export class HtmlTagPipe implements PipeTransform {

  transform(value: any, html: string): any {
    return '<' + html + '>' + value + '</' + html + '>';
  }

}
