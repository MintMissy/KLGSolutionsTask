import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormArrayName, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-invoice-form-item',
	templateUrl: './invoice-form-item.component.html',
	styleUrls: ['./invoice-form-item.component.scss'],
	// changeDetection: ChangeDetectionStrategy.OnPush,
	viewProviders: [
		{
			provide: ControlContainer,
			useExisting: FormArrayName,
		},
	],
})
export class InvoiceFormItemComponent {
	@Input() index!: number;
	@Input() invoiceItemForm!: FormGroup;

	@Output() delete = new EventEmitter<number>();

	get name() {
		return this.invoiceItemForm.get('name');
	}

	get count() {
		return this.invoiceItemForm.get('count');
	}

	get price() {
		return this.invoiceItemForm.get('price');
	}

	onItemDelete() {
		this.delete.emit(this.index);
	}
}
