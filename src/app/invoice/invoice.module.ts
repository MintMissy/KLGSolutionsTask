import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailsComponent } from './ui/company-details/company-details.component';
import { InvoiceGeneratorComponent } from './feature/invoice-generator/invoice-generator.component';
import { InvoicePreviewComponent } from './feature/invoice-preview/invoice-preview.component';
import { SumInvoicesPipe } from './pipe/sum-invoices.pipe';
import { InvoiceFormItemComponent } from './ui/invoice-form-item/invoice-form-item.component';
import { InvoiceTableComponent } from './ui/invoice-table/invoice-table.component';



@NgModule({
  declarations: [
    CompanyDetailsComponent,
    InvoicePreviewComponent,
    InvoiceGeneratorComponent,
    SumInvoicesPipe,
    InvoiceFormItemComponent,
    InvoiceTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvoiceModule { }
