import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { especialidadesComponent } from './especialidades/especialidades.component';

const routes: Routes = [
  {
    path:'',
    component:especialidadesComponent,
    children:[
      {
        path:'especialidades',
        component: especialidadesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialidadesRoutingModule { }
