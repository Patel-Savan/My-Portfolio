import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
    { path : '', component: HeroComponent},
    { path : 'all-projects', component: AllProjectsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ };
