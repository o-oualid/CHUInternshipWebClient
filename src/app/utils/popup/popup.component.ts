import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() title: string = '';
  @Input() okTitle: string = '';
  @Output() okClicked: EventEmitter<PopupComponent> = new EventEmitter();
  @Input() cancelTitle: string = '';
  @Output() cancelClicked: EventEmitter<PopupComponent> = new EventEmitter();

  constructor() {

  }

  onOkClicked(): void {
    this.okClicked.emit(this);
  }

  onCancelClicked() {
    this.cancelClicked.emit(this);
  }
}
