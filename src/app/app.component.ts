import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
      <header class="brand-name">
        <a href="http://localhost:4200/" ><img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" /></a>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
