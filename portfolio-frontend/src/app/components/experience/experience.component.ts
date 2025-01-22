import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ExperienceCardComponent } from '../cards/experience-card/experience-card.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-experience',
  imports: [NgFor, ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiences:any[] = [];

  constructor(private apiService : ApiService){}

  ngOnInit(): void {
    this.apiService.getExperiences().subscribe(
      (data) => {
        this.experiences = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  // experiences = [
  //   {
  //     title: 'Full Stack Developer',
  //     company: 'BrainyBeam Technologies',
  //     timePeriod: 'May 2023 - Dec 2023',
  //     location: 'Ahmedabad, India',
  //     responsibilities: [
  //       'Developed full-stack web applications using React and Node.js.',
  //       'Collaborated with a team to build scalable RESTful APIs.',
  //       'Integrated AWS services for cloud-based deployment.',
  //       'Optimized performance and fixed bugs to improve user experience.'
  //     ]
  //   },
  //   {
  //     title: 'Web Developer Intern',
  //     company: 'Tech Elecon Pvt. Ltd.',
  //     timePeriod: 'Jan 2023 - Apr 2023',
  //     location: 'Mumbai, India',
  //     responsibilities: [
  //       'Designed and implemented responsive web pages using HTML, CSS, and JavaScript.',
  //       'Worked on improving website SEO to increase traffic.',
  //       'Collaborated with designers to ensure seamless UI/UX.',
  //       'Participated in regular sprint planning and code reviews.'
  //     ]
  //   }
  // ];
}
