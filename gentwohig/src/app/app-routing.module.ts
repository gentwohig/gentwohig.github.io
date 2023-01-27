import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomePageComponent } from './components/home-page';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }