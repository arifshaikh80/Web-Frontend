import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  activeTab: 'user' | 'mentor' | 'company' = 'user';
  showModal = false;
  role = 'User';

  changeTab(tab: 'user' | 'mentor' | 'company') {
    this.activeTab = tab;
  }

  openModal(role: string) {
    this.role = role;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
