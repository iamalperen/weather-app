import {Pipe, PipeTransform} from '@angular/core';
import {IconMap} from "../../constants";

@Pipe({
  name: 'iconMap'
})
export class IconMapPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    // @ts-ignore
    return IconMap[value] || 'cloud-moon'; // fallback
  }

}
