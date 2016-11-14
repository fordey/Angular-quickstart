"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var vessell_service_1 = require('./vessell.service');
var AppComponent = (function () {
    function AppComponent(vessellService) {
        this.vessellService = vessellService;
        this.title = 'Vessells';
    }
    AppComponent.prototype.getVessells = function () {
        var _this = this;
        this.vessellService.getVessells().then(function (vessells) { return _this.vessells = vessells; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getVessells();
    };
    AppComponent.prototype.onSelect = function (vessell) {
        this.selectedVessell = vessell;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Vessels</h2>\n    <ul class=\"vessells\">\n      <li *ngFor=\"let vessell of vessells\"\n        [class.selected]=\"vessell === selectedVessell\"\n        (click)=\"onSelect(vessell)\">\n        <span class=\"badge\">{{vessell.id}}</span> {{vessell.name}}\n      </li>\n    </ul>\n\n    <vessell-detail [vessell] =\"selectedVessell\"></vessell-detail>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .vessells {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .vessells li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .vessells li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .vessells li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .vessells .text {\n      position: relative;\n      top: -3px;\n    }\n    .vessells .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7evessells   background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      heightvessellsm;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n  vessells"],
            providers: [vessell_service_1.VessellService]
        }), 
        __metadata('design:paramtypes', [vessell_service_1.VessellService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map