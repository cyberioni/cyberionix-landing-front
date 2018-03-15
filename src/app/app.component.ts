import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public isVisible: boolean = false;

  onActivate(e, outlet){
    outlet.scrollTop = 0;
  }
  showBurger() {
    this.isVisible = !this.isVisible;
  }
}
