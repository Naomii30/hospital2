import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadesComponent } from './especialidades/especialidades.component';

const routes: Routes = [
  {
    path:'',
    component:EspecialidadesComponent,
    children:[
      {
        path:'especialidades',
        component: EspecialidadesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialidadesRoutingModule { }
