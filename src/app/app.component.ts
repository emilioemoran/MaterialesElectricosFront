import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'materiales-electricos';

  constructor() {}



  navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
    } else {
        navbarCollapsible.classList.add('navbar-shrink')
    }
  };

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    document.addEventListener('scroll', this.navbarShrink);
    // Add your scroll event handling code here
  }

}
