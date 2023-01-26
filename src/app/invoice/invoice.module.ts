import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { InvoiceGeneratorComponent } from './feature/invoice-generator/invoice-generator.component';
import { InvoicePreviewComponent } from './feature/invoice-preview/invoice-preview.component';
import { SumInvoicePipe } from './pipe/sum-invoice.pipe';
import { CompanyDetailsComponent } from './ui/company-details/company-details.component';
import { InvoiceFormItemComponent } from './ui/invoice-form-item/invoice-form-item.component';
import { InvoiceFormItemsComponent } from './ui/invoice-form-items/invoice-form-items.component';
import { InvoiceTableComponent } from './ui/invoice-table/invoice-table.component';

@NgModule({
	declarations: [
		CompanyDetailsComponent,
		InvoicePreviewComponent,
		InvoiceGeneratorComponent,
		InvoiceFormItemsComponent,
		InvoiceTableComponent,
		InvoiceFormItemComponent,
		SumInvoicePipe,
	],
	imports: [CommonModule, SharedModule, MaterialModule, ReactiveFormsModule],
})
export class InvoiceModule {}
