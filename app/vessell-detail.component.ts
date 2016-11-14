import {Component, Input} from '@angular/core';
import {Vessell} from './vessell';

@Component(
	{
		selector: 'vessell-detail',
		template:`
			<div *ngIf="vessell">
      		<h2>{{vessell.name}} details!</h2>
      		<div><label>id: </label>{{vessell.id}}</div>
      			<div>
        			<label>name: </label>
        			<input [(ngModel)]="vessell.name" placeholder="name"/>
      			</div>
    		</div>
    	`
	}
)

export class VessellDetailComponent{
	@Input()
	vessell: Vessell;
}