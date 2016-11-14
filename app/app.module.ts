import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}    from '@angular/forms';
import { AppComponent }  from './app.component';
import {VessellDetailComponent} from './vessell-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, VessellDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
