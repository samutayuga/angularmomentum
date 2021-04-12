import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'title',
})
export class TitleCased implements PipeTransform {
  words: RegExp = /\b(?!of|by|in|the|at|and)\w+/g;
  // tslint:disable-next-line: typedef
  transform(text: string, params: any) {
    if (!text) {
      return text;
    }
    // algop for title case

    // capitalize the first letter of said word
    const newVal = text.toLowerCase().replace(this.words, this.ifMatch);

    // always capilize first letter of new val
    return newVal.charAt(0).toUpperCase() + newVal.substr(1);
  }

  // function to lowercase the second character and onward
  second = (wd: string) => wd.charAt(0).toUpperCase() + wd.substr(1);
  ifMatch = (match: string) => match.replace(/^\w/, this.second);
}
