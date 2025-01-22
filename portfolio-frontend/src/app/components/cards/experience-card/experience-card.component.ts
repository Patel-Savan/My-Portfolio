import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  imports: [NgFor],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
  @Input() title!: string;
  @Input() timePeriod!: string;
  @Input() company!: string;
  @Input() location!: string;
  @Input() responsibilities!: string[];
}
