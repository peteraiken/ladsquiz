import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoundSelectionComponent } from './round-selection/round-selection.component';


const routes: Routes = [
  { path : '', component: DashboardComponent },
  { path: 'roundselection', component: RoundSelectionComponent },
  { path: 'questions', component: QuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
