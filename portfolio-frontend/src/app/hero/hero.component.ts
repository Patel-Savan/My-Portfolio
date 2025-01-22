import { Component } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ContactComponent } from '../components/contact/contact.component';

@Component({
  selector: 'app-hero',
  imports: [HomeComponent, AboutComponent, ProjectsComponent, ExperienceComponent, ContactComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
