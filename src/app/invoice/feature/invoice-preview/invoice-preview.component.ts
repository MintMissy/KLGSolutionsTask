import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoicePreviewComponent {

}