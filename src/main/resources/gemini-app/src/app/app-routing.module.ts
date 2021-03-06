import { InitialComponent } from './pages/initial/initial.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestComponent } from './pages/quest/quest.component';
import { createGrupoComponent } from './pages/creategrupo/creategrupo.component';
import { ListargrupoComponent } from './pages/listargrupo/listargrupo.component';
import { QuestaolistComponent } from './pages/questaolist/questaolist.component';
import { ResponderQuestComponent } from './pages/responder-quest/responder-quest.component';

const routes: Routes = [
  {path:'',component:InitialComponent},
  {path:'turma', loadChildren: () => import('./pages/turma/turma.module').then(module => module.TurmaModule)},
  {path:'questionario',component:QuestComponent},
  {path:'creategrupo',component:createGrupoComponent},
  {path:'listargrupo/:id',component:ListargrupoComponent},
  {path:'questao',component:QuestaolistComponent},
  {path:'responder-questao',component:ResponderQuestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
