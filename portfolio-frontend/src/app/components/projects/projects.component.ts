import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgFor, NgIf } from '@angular/common';
import { ProjectCardComponent } from '../cards/project-card/project-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [NgIf, NgFor, ProjectCardComponent, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  featuredProjects: any[2] = [];
  loading = true;
  defaultImage = 'assets/my-picture.jpg';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProjects().subscribe(
        (data) => {
          this.featuredProjects = data.slice(0, 2);
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching projects:', error);
          this.loading = false;
        }
      );
  }
}
