import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { gsap } from 'gsap';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChild('menu') menu!: ElementRef;
  menuOpen = false;

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      gsap.to(this.menu.nativeElement, { left: 0, duration: 0.9, ease: "back.out(1.0)" });
    } else {
      gsap.to(this.menu.nativeElement, { left: '-100%', duration: 0.5 });
    }
  }
}
