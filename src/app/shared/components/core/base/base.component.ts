import { Component } from '@angular/core';
import {state} from "@angular/animations";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
})
export class BaseComponent {

  protected state :string='collapse'

  changeState() {
    this.state=this.state==='collapse'?'':'collapse';
  }
}
