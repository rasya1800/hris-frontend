import { CommonModule } from '@angular/common'; // WAJIB ditambahkan!
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true, // WAJIB: Menjadikan komponen ini mandiri
  imports: [CommonModule], // Tambahkan CommonModule di sini
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeMenu: string | null = null;

  toggleSubmenu(menu: string) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }
}
