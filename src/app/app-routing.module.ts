import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EasyComponent } from './easy/easy.component';
import { MediumComponent } from './medium/medium.component';
import { HardComponent } from './hard/hard.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'easy', component: EasyComponent },
  {path: 'medium', component: MediumComponent},
  {path: 'hard', component: HardComponent },
  {path: "",  component: HomeComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
