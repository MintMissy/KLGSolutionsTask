import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
	MatButtonModule,
	MatToolbarModule,
	MatIconModule,
	MatFormFieldModule,
	MatInputModule,
	MatProgressSpinnerModule,
	MatTableModule,
];

@NgModule({
	imports: [materialModules],
	exports: [materialModules],
})
export class MaterialModule {}
