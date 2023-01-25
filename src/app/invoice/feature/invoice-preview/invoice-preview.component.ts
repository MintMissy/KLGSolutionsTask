import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDetails } from '../../model/company-details.model';
import { Invoice } from '../../model/invoice.model';
import { CompanyDetailsService } from '../../service/company-details.service';

@Component({
	selector: 'app-invoice-preview',
	templateUrl: './invoice-preview.component.html',
	styleUrls: ['./invoice-preview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoicePreviewComponent implements OnInit {
	companyDetails$!: Observable<CompanyDetails>;
	invoice!: Invoice;

	constructor(private companyDetailsService: CompanyDetailsService) {}

	ngOnInit(): void {
		this.companyDetails$ = this.companyDetailsService.getCompanyDetails();
	}
}
