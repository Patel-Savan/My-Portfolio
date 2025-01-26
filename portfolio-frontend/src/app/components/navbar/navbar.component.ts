import {
  Component,
  HostBinding,
  OnInit,
  Renderer2,
  signal,
} from '@angular/core';
import { HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgIf, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title = signal('Savan Patel');

  isMobile: boolean = false;
  menuOpened: boolean = false;

  constructor(private rendered: Renderer2, private router: Router) {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  @HostBinding('class.menu-open') menuOpenClass = false;

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.menuOpened = false;
    }
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
    this.menuOpenClass = this.menuOpened;
  }

  scrollToSection(event: Event, sectionId: string) {
    if (this.isMobile) {
      this.toggleMenu();
    }
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        event.preventDefault();
        setTimeout(() => {
          this.scrollToElement(sectionId, event);
        }, 500);
      });
    } else {
      this.scrollToElement(sectionId, event);
    }
  }

  private scrollToElement(sectionId: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
