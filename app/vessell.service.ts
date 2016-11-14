import { Injectable } from '@angular/core';

import {Vessell} from './vessell';
import {VESSELLS} from './mock-vessells';

@Injectable()
export class VessellService {
	
	getVessells() : Promise<Vessell[]> {
		return Promise.resolve(VESSELLS);
	}
}