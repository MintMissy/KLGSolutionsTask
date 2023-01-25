import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NotFoundPageComponent } from './ui/not-found-page/not-found-page.component';



@NgModule({
  declarations: [
    NotFoundPageComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
