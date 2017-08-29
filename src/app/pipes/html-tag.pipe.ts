import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlTag'
})
export class HtmlTagPipe implements PipeTransform {

  transform(value: any, htmlTags: string): any {
    let html=value;
    htmlTags.split(",").forEach((htmlTag=> html = '<' + htmlTag + '>' + html + '</' + htmlTag + '>'));
    return html;
  }

}
