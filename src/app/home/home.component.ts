import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToDigidex() {
    document
      .querySelectorAll('.home-container > *, .digi1, .digi2')
      .forEach((el) => el.classList.add('fade-out'));

    setTimeout(() => this.router.navigate(['/digidex']), 1000); // Espera 1s
  }
}
