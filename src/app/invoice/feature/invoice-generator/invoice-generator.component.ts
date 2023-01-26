import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
	selector: 'app-invoice-generator',
	templateUrl: './invoice-generator.component.html',
	styleUrls: ['./invoice-generator.component.scss'],
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceGeneratorComponent {
	form = this.fb.group({
		items: this.fb.array([this.createInvoiceItem()]),
	});

	get invoiceItems() {
		return this.form.get('items') as FormArray;
	}

	constructor(private fb: FormBuilder, private router: Router) {}

	onItemAdd() {
		this.invoiceItems.push(this.createInvoiceItem());
	}

	onItemRemove(index: number) {
		this.invoiceItems.removeAt(index);
	}

	onSubmit() {
		if (!this.form.valid) {
			this.form.markAllAsTouched();
			return;
		}
		if (this.invoiceItems.length === 0) {
			return;
		}

		const routerExtras: NavigationExtras = { state: { invoice: this.form.value } };
		this.router.navigate(['preview'], routerExtras);
	}

	private createInvoiceItem() {
		return this.fb.group({
			name: this.fb.control(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
			count: this.fb.control(1, [Validators.required, Validators.min(1), Validators.max(100)]),
			price: this.fb.control(null, [Validators.required, Validators.min(1), Validators.max(1000000)]),
		});
	}
}
