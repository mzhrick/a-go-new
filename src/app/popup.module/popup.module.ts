/**
 * Created by ricomai on 9/5/17.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PopupModule } from 'ng2-opd-popup';
import { PopUpComponent } from './popup.component';




@NgModule({
  declarations: [
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    PopupModule.forRoot()
  ],
  providers: [],
  exports:[PopUpComponent]
})
export class PopModule { }
