import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'contact-page', component: ContactPageComponent },
  { path: 'experience-page', component: ExperienceComponent },
  { path: 'project-page', component: ProjectPageComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
