import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JoinPipe } from './pipe/join.pipe';
import { IntegerInputDirective } from './directives/integer-input.directive';

@NgModule({
	declarations: [JoinPipe, IntegerInputDirective],
	imports: [CommonModule],
	exports: [JoinPipe, IntegerInputDirective],
})
export class SharedModule {}
