import { Component } from '@angular/core';

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
  onDeactivate() {
    document.body.scrollTop = 0;
  }
}
