import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ExperienceCardComponent } from '../cards/experience-card/experience-card.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-experience',
  imports: [NgIf, NgFor, ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: any[] = [];
  loading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getExperiences().subscribe(
      (data) => {
        this.experiences = data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }
}
