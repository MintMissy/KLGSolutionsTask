import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyDetailsComponent {

}
