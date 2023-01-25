import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/ui/not-found-page/not-found-page.component';
import { InvoiceGeneratorComponent } from './invoice/feature/invoice-generator/invoice-generator.component';
import { InvoicePreviewComponent } from './invoice/feature/invoice-preview/invoice-preview.component';

const routes: Routes = [
	{
		path: '',
		component: InvoiceGeneratorComponent,
	},
	{
		path: 'preview',
		component: InvoicePreviewComponent,
	},
	{
		path: '**',
		component: NotFoundPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
