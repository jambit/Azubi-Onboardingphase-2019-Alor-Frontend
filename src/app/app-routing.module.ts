import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoodOMeterComponent} from './mood-ometer/mood-ometer.component';

const routes: Routes = [
  { path: 'moodometer', component: MoodOMeterComponent },
  { path: '', redirectTo: '/mood', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
