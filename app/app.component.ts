import { Component, OnInit } from '@angular/core';

import {Vessell} from './vessell';
import {VessellService} from './vessell.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Vessels</h2>
    <ul class="vessells">
      <li *ngFor="let vessell of vessells"
        [class.selected]="vessell === selectedVessell"
        (click)="onSelect(vessell)">
        <span class="badge">{{vessell.id}}</span> {{vessell.name}}
      </li>
    </ul>

    <vessell-detail [vessell] ="selectedVessell"></vessell-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .vessells {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .vessells li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .vessells li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .vessells li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .vessells .text {
      position: relative;
      top: -3px;
    }
    .vessells .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7evessells   background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      heightvessellsm;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
  vessells`],

  providers: [VessellService]
})

export class AppComponent implements OnInit {
  title = 'Vessells';
  vessells : Vessell[];
  selectedVessell: Vessell;

  constructor(private vessellService : VessellService){ }

  getVessells(): void{
    this.vessellService.getVessells().then(vessells => this.vessells = vessells);
  }

  ngOnInit():void{
    this.getVessells();
  }

  onSelect(vessell: Vessell): void {
    this.selectedVessell = vessell;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/