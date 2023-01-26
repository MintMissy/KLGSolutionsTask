import { Pipe, PipeTransform } from '@angular/core';
import { Invoice } from '../model/invoice.model';

@Pipe({
	name: 'sumInvoice',
})
export class SumInvoicePipe implements PipeTransform {
	transform(invoice: Invoice): number {
		return invoice.items.map((item) => item.price * item.count).reduce((previous, current) => previous + current);
	}
}
