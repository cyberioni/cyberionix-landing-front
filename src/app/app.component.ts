import { Component } from '@angular/core';
import {Utils} from './utils/Utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isVisible = false;

  showBurger() {
    this.isVisible = !this.isVisible;
  }
  toGetInTouch() {
    Utils.scrollToElement('get_in_touch', 0, 50);
  }
  onDeactivate() {
    // document.body.scrollTop = 0;
  }
}
