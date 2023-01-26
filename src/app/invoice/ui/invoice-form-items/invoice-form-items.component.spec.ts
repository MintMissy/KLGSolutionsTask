import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFormItemsComponent } from './invoice-form-items.component';

describe('InvoiceFormItemsComponent', () => {
	let component: InvoiceFormItemsComponent;
	let fixture: ComponentFixture<InvoiceFormItemsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [InvoiceFormItemsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(InvoiceFormItemsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
