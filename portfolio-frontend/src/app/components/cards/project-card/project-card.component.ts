import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [NgFor],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() techStack!: string[];
  @Input() image!: string;
  @Input() repoLink!: string;

  defaultImage = "assets/my-picture.jpg";
}
