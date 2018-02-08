import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'firstLetter' })
export class NamePipe implements PipeTransform {
    transform(value: String, args?: any) {
        return value.charAt(0);
    }
}