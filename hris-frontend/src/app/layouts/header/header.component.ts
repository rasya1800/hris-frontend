import { CommonModule } from '@angular/common'; // WAJIB ditambahkan!
import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true, // WAJIB: Menjadikan komponen ini mandiri
  imports: [CommonModule], // Tambahkan CommonModule di sini
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    logoUrl = 'logo/logo.png';
    isDropdownOpen = false;

    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
}
