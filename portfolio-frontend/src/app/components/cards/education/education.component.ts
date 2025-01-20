import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  @Input() degree!: string;
  @Input() institution!: string;
  @Input() year!: string;
  @Input() grade!: string;
  @Input() location! : string;
}
