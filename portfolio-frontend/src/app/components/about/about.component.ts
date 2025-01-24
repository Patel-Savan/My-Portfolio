import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule, NgFor } from '@angular/common';
import { EducationComponent } from '../cards/education/education.component';

@Component({
  selector: 'app-about',
  imports: [NgFor, EducationComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  loading:boolean = true;

  timeline = [
    { year: "2019", description: "Started Bachelors at GTU" },
    { year: "2020", description: "Began competitive coding on platforms like HackerRank" },
    { year: "2021", description: "Built first React.js and Node.js web app" },
    { year: "2022", description: "Interned at TatvaSoft Pvt. Ltd." },
    { year: "2023", description: "Interned as Web Developer at Tech Elecon Pvt. Ltd." },
    { year: "2023", description: "Graduated with Bachelor's in Computer Engineering" },
    { year: "2023", description: "Interned as Full Stack Developer at BrainyBeam Technologies" },
    { year: "2024", description: "Moved to Halifax for Master's at Dalhousie University" },
  ];
  
  educationList = [
    {
      degree: "Masters of Applied Computer Science",
      institution: "Dalhousie University",
      year: "2024 - Present",
      grade: "4.23 GPA",
      location: "Halifax, Nova Scotia, Canada"
    },
    {
      degree: "Bachelors of Computer Engineering",
      institution: "Gujarat Technological University",
      year: "2019 - 2023",
      grade: "9.05 CGPA",
      location: "Ahmedabad, Gujarat, India"
    },
  ]; 

  groupedSkills: { [category: string]: string[] } = {};

  constructor(private apiService : ApiService){}

  ngOnInit(): void {
    this.fetchSkills();
  }

  skillOrder = ['Programming Language', 'Cloud and DevOps', 'Frontend', 'Backend', 'Testing'];

  sortSkills = (a: any, b: any) => {
    const orderA = this.skillOrder.indexOf(a.key);
    const orderB = this.skillOrder.indexOf(b.key);
    return orderA - orderB;
  };

  fetchSkills(): void {
    this.apiService.getSkills().subscribe(
      (data) => {
        this.groupedSkills = data;
        console.log(data);
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    )
  }

}
