import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appIntegerInput]',
})
export class IntegerInputDirective {
	constructor(private elementRef: ElementRef) {}

	@HostListener('keydown', ['$event'])
	onKeyDown(event: KeyboardEvent) {
		if (event.key === '.') {
			event.preventDefault();
		}
	}

	@HostListener('input')
	onInput() {
		const inputElement = this.elementRef.nativeElement as HTMLInputElement;
		inputElement.value = inputElement.value.split('.')[0];
	}
}
