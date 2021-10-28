import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'wordsTruncature'
})

export class WordsTruncaturePipe implements PipeTransform {

  transform(value: string, limit = 25): string {
    limit = value.substr(0, limit).lastIndexOf(' ');
    return value.length > limit ? value.substr(0, limit) + '…' : value;
  }

}
