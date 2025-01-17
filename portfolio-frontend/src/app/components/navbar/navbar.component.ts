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

  constructor(private rendered: Renderer2) {
    this.checkScreenSize();
  }
  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
    this.toggleClass();
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

    this.toggleClass();
  }

  toggleClass(){
    const contentDiv = document.querySelector('#main-content');

    if (this.menuOpened) {
      this.rendered.removeClass(contentDiv, 'mobile-content');
    } else {
      this.rendered.addClass(contentDiv, 'mobile-content');
    }
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
