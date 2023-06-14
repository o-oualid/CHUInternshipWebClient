import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ELearningComponent} from "./e-learning/e-learning.component";
import {KnowledgeComponent} from "./knowledge/knowledge.component";
import {EvaluationComponent} from "./evaluation/evaluation.component";

const routes: Routes = [
  {path: '', component: ELearningComponent, pathMatch: 'full'},
  {path: 'knowledge', component: KnowledgeComponent, pathMatch: 'full'},
  {path: 'evaluation', component: EvaluationComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningRoutingModule {
}
