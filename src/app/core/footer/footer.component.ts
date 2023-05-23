import { Component } from '@angular/core';
import {window} from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

    protected readonly Date = Date;
  protected readonly window = window;

  moveToTop() {
    const element = document.querySelector('#top');
    element?.scrollIntoView();
  }
}
