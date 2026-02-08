import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HomeComponent } from './components/home/home';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <app-home></app-home>
    <app-footer></app-footer>
  `,
  styleUrl: './app.css'
})
export class AppComponent {}
