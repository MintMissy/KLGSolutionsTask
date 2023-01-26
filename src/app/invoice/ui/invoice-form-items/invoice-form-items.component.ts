import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormArray, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
	selector: 'app-invoice-form-items',
	templateUrl: './invoice-form-items.component.html',
	styleUrls: ['./invoice-form-items.component.scss'],
	// changeDetection: ChangeDetectionStrategy.OnPush,
	viewProviders: [
		{
			provide: ControlContainer,
			useExisting: FormGroupDirective,
		},
	],
})
export class InvoiceFormItemsComponent implements OnInit {
	@Input() formGroup!: FormGroup;
	@Output() delete = new EventEmitter<number>();

	form!: FormArray;

	get invoiceItems() {
		return this.form.controls as FormGroup[];
	}

	ngOnInit(): void {
		this.form = <FormArray>this.formGroup.get('items');
	}

	onItemDelete(index: number) {
		this.delete.emit(index);
	}
}
