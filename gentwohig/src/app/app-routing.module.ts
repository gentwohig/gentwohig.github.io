import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'contact-page', component: ContactPageComponent },
  { path: 'experience-page', component: ExperienceComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
