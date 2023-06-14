import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ELearningRoutingModule} from './e-learning-routing.module';
import {KnowledgeComponent} from './knowledge/knowledge.component';
import {EvaluationComponent} from './evaluation/evaluation.component';
import {ELearningComponent} from './e-learning/e-learning.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    KnowledgeComponent,
    EvaluationComponent,
    ELearningComponent
  ],
  imports: [
    CommonModule,
    ELearningRoutingModule,
    ReactiveFormsModule
  ]
})
export class ELearningModule {
}
