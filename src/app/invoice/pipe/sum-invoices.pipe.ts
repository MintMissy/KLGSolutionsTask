import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumInvoices'
})
export class SumInvoicesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
