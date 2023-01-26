import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NotFoundPageComponent } from './ui/not-found-page/not-found-page.component';

@NgModule({
	declarations: [NotFoundPageComponent, NavbarComponent],
	exports: [NotFoundPageComponent, NavbarComponent],
	imports: [CommonModule, MaterialModule, RouterModule],
})
export class CoreModule {}
