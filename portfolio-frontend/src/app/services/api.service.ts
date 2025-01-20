import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:5000/api';

  getSkills(): Observable<any> {
    return this.http.get(`${this.baseUrl}/skill`).pipe(
      map((skills:any) => {
        return skills.reduce((grouped: any, skill: any) => {
          const category = skill.category;
          if (!grouped[category]) {
            grouped[category] = [];
          }
          grouped[category].push(skill.name);
          return grouped;
        }, {});
      })
    );;
  }

  getProjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/projects`);
  }

  getExperiences(): Observable<any> {
    return this.http.get(`${this.baseUrl}/experience`);
  }
}
