import { Component} from '@angular/core';
import { ProjectCardComponent } from "../../components/cards/project-card/project-card.component";
import { NgFor, NgIf } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-all-projects',
  imports: [ProjectCardComponent, NgFor, NgIf],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss'
})
export class AllProjectsComponent {
  projects:any[] = [];
  loading = true;
  defaultImage = "assets/my-picture.jpg";

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProjects() .subscribe(
      (data) => {
        this.projects = data;
        console.log(data);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching projects:', error);
        this.loading = false;
      }
    );
  }

}
