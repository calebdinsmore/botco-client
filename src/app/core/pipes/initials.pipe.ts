import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value?.replace(/[a-z]/g, '').replace(' ', '').toUpperCase();
  }
}
