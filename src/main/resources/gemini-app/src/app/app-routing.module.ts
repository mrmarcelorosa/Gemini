import { InitialComponent } from './pages/initial/initial.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { createGrupoComponent } from './pages/creategrupo/creategrupo.component';
import { ListargrupoComponent } from './pages/listargrupo/listargrupo.component';

const routes: Routes = [
  {path:'',component:InitialComponent},
  {path:'creategrupo',component:createGrupoComponent},
  {path:'listargrupo',component:ListargrupoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
