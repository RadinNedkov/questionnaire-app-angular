import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private router: Router ) {}

  doRestart() {
    const currentUrl = this.router.url
    if (currentUrl == '/') {
      this.router.navigate(['/questionnaire' ]);
    } else {
      this.router.navigate(['/' ]);
    }
  }
}
