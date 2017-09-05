/**
 * Created by ricomai on 9/5/17.
 */

import { Component } from '@angular/core';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector:'pop-up',
  template:`
    <popup>
      Add your custom html elements here
    </popup>
    
    <button (click)="show()"></button>
  `
})

export class PopUpComponent {
  constructor(private popup:Popup) { }

  show(){
    this.popup.show();
  }
}
