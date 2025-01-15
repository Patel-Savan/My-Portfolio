import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path : '', component: HomeComponent},
    { path : 'about', component: AboutComponent},
    { path : 'experience', component: ExperienceComponent},
    { path : 'projects', component: ProjectsComponent},
    { path : 'contact', component: ContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ };
