import { InitialComponent } from './pages/initial/initial.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestComponent } from './pages/quest/quest.component';

const routes: Routes = [
  {path:'',component:InitialComponent},
  {path:'turma', loadChildren: () => import('./pages/turma/turma.module').then(module => module.TurmaModule)}
  {path:'questionario',component:QuestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
