import { AbstractControl } from '@angular/forms';

export function IntegerValidator(control: AbstractControl): { notInteger: any; } | null {
	return (control.value + '').includes('.') ? { notInteger: true } : null;
}
