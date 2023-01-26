import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { CompanyDetails } from '../model/company-details.model';

@Injectable({
	providedIn: 'root',
})
export class CompanyDetailsService {
	private API_URL = 'http://localhost:3000';

	constructor(private httpClient: HttpClient) {}

	getCompanyDetails() {
		return this.httpClient.get<CompanyDetails>(`${this.API_URL}/company`).pipe(retry(3));
	}
}
