import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  professions: string[] = [
    'Full Stack Developer',
    'Cloud Developer',
    'CS Grad'
  ];
  currentProfession: string = this.professions[0];
  private professionIndex: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startProfessionRotation();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); 
  }

  startProfessionRotation(): void {
    this.intervalId = setInterval(() => {
      this.professionIndex = (this.professionIndex + 1) % (this.professions.length);
      this.currentProfession = this.professions[this.professionIndex];
    }, 2000); 
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
