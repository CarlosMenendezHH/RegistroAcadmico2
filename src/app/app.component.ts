import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    button (click)="redireccionar()">Menu</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }
  title = 'RegistroAcademico';

  redireccionar() {
    this.router.navigate(['/menu-principal-e']);
  }
}
