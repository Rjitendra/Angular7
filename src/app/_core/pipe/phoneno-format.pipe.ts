import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'phone'
})
export class PhoneFormatPipe implements PipeTransform {
    transform(val, args) {
     val = val.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        return val;
    }
}