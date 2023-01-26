import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
	invoice!: Invoice | undefined;

	constructor(private companyDetailsService: CompanyDetailsService, private router: Router) {
		this.invoice = this.router.getCurrentNavigation()?.extras.state?.['invoice'];
	}

	ngOnInit(): void {
		this.companyDetails$ = this.companyDetailsService.getCompanyDetails();
	}
}
