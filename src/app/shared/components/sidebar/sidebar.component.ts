import { Component, ElementRef, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChildren('menuItem') menuItems!: QueryList<ElementRef>;
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('items') items!: ElementRef;
  menuOpen = false;

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      gsap.to(this.menu.nativeElement, {
        left: 0,
        duration: 0.9,
        ease: "back.out(1.0)",
        onComplete: () => {
          this.animateMenuItems(true);
        }
      });
      this.menuItems.forEach((item, index) => {
        gsap.to(item.nativeElement, {
          left: 0,
          duration: 0.9,
          ease: "back.out(0.1)",
          delay: index * 0.1
        });
      });
    } else {
      gsap.to(this.menu.nativeElement, {
        left: '-100%',
        duration: 0.9,
      });
      this.animateMenuItems(false, () => {
        this.menuItems.forEach((item, index) => {
          gsap.to(item.nativeElement, {
            left: '-100%',
            duration: 0.5,
            delay: index * 0.1
          });
        });
      });
    }
  }

  animateMenuItems(opening: boolean, onComplete?: () => void) {
    if (opening) {
      gsap.to(this.items.nativeElement.children, {
        top: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.4)",
        stagger: 0.1
      });
    } else {
      gsap.to(this.items.nativeElement.children, {
        top: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power1.in",
        stagger: 0.1,
        onComplete: onComplete
      });
    }
  }
}
