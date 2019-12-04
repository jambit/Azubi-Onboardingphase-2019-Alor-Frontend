import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoodOMeterComponent} from './mood-ometer/mood-ometer.component';
import {ArrivalTableComponent} from "./arrival-table/arrival-table.component";

const routes: Routes = [
  { path: 'moodometer', component: MoodOMeterComponent },
  { path: '', redirectTo: '/moodometer', pathMatch: 'full' },
  { path: 'arrival', component: ArrivalTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
