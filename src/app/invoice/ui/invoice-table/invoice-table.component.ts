import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Invoice } from '../../model/invoice.model';

@Component({
	selector: 'app-invoice-table',
	templateUrl: './invoice-table.component.html',
	styleUrls: ['./invoice-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceTableComponent {
	@Input() invoice!: Invoice;

	displayedColumns: string[] = ['index', 'name', 'count', 'price'];
}
