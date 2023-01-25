import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceTableComponent {

}
