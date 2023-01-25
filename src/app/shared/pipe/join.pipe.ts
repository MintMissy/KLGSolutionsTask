import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'join',
})
export class JoinPipe implements PipeTransform {
	transform(list: string[], separator: string): string {
		return list.join(separator);
	}
}
