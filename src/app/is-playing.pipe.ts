import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isPlaying'
})
export class IsPlayingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value+(args?' is playing today': ' is on rest');
  }

}
