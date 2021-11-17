import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';

const routes: Routes = [
  {
    path:'',
    component:LaboratoriosComponent,
    children:[
      {
        path:'laboratorios',
        component: LaboratoriosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoriosRoutingModule { }
