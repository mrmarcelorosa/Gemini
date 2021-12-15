import { InitialComponent } from './pages/initial/initial.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:InitialComponent},
  {path:'turma', loadChildren: () => import('./pages/turma/turma.module').then(module => module.TurmaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
